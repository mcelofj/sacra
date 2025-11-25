/**
 * SACRA - Landing Page JavaScript
 * Interatividade e Animações
 */

// ===================================
// 1. VARIABLES & INITIALIZATION
// ===================================

const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const contatoForm = document.getElementById('contatoForm');
const formMessage = document.getElementById('formMessage');
const portfolioFilters = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// ===================================
// 2. NAVIGATION & HEADER
// ===================================

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ===================================
// 3. SMOOTH SCROLL
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// 4. BACK TO TOP BUTTON
// ===================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// 5. PORTFOLIO FILTER
// ===================================

portfolioFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Remove active class from all filters
        portfolioFilters.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked filter
        filter.classList.add('active');
        
        // Get filter value
        const filterValue = filter.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (filterValue === 'all' || filterValue === itemCategory) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===================================
// 6. FORM VALIDATION & SUBMISSION
// ===================================

if (contatoForm) {
    contatoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contatoForm);
        
        // Validate form
        const nome = formData.get('nome');
        const email = formData.get('email');
        const mensagem = formData.get('mensagem');
        
        if (!nome || !email || !mensagem) {
            showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Por favor, insira um email válido.', 'error');
            return;
        }
        
        // Disable submit button
        const submitBtn = contatoForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        try {
            // Send form data
            const response = await fetch('send-email.php', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                showFormMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                contatoForm.reset();
            } else {
                showFormMessage(result.message || 'Erro ao enviar mensagem. Tente novamente.', 'error');
            }
        } catch (error) {
            showFormMessage('Erro ao enviar mensagem. Tente novamente mais tarde.', 'error');
        } finally {
            // Re-enable submit button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ===================================
// 7. SCROLL ANIMATIONS (AOS)
// ===================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===================================
// 8. LOADING ANIMATIONS
// ===================================

window.addEventListener('load', () => {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Fade in hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ===================================
// 9. PARALLAX EFFECT (Optional)
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// 10. PORTFOLIO ITEM TRANSITIONS
// ===================================

portfolioItems.forEach(item => {
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

// ===================================
// 11. FORM INPUT ANIMATIONS
// ===================================

const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
});

// ===================================
// 12. COUNTER ANIMATION (Optional)
// ===================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===================================
// 13. TYPING EFFECT (Optional)
// ===================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===================================
// 14. UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===================================
// 15. CONSOLE MESSAGE
// ===================================

console.log('%c🌸 SACRA - Agência de Marketing Digital', 'color: #C2185B; font-size: 20px; font-weight: bold;');
console.log('%cDesenvolvido com ❤️ pela equipe SACRA', 'color: #E91E63; font-size: 14px;');
console.log('%cwww.agenciasacra.com.br', 'color: #F8BBD0; font-size: 12px;');

// ===================================
// 16. PREVENT DEFAULT PORTFOLIO LINKS
// ===================================

document.querySelectorAll('.portfolio-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Here you can add lightbox functionality or modal
        console.log('Portfolio item clicked');
    });
});

// ===================================
// 17. LAZY LOADING IMAGES (Optional)
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// 18. MOBILE MENU CLOSE ON OUTSIDE CLICK
// ===================================

document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===================================
// 19. KEYBOARD NAVIGATION
// ===================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===================================
// 20. PERFORMANCE OPTIMIZATION
// ===================================

// Optimize scroll events with throttle
const optimizedScroll = throttle(() => {
    activateNavLink();
}, 100);

window.addEventListener('scroll', optimizedScroll);
