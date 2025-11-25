# SACRA - Landing Page

Landing page profissional para a agência de marketing digital SACRA, desenvolvida com HTML, CSS, JavaScript e PHP.

## 🎨 Características

- **Design Moderno**: Interface clean e profissional com tonalidade rosa
- **Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- **Animações**: Efeitos suaves de scroll e transições
- **Formulário de Contato**: Sistema completo de envio de emails com PHP
- **SEO Otimizado**: Estrutura HTML semântica e meta tags
- **Performance**: Código otimizado e carregamento rápido

## 📋 Requisitos

Para rodar este projeto localmente, você precisará de:

- **WAMP Server** (Windows + Apache + MySQL + PHP)
- **PHP 7.4.33** ou superior
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

## 🚀 Instalação no WAMP Server

### Passo 1: Instalar o WAMP Server

1. Baixe o WAMP Server em: https://www.wampserver.com/
2. Instale o WAMP seguindo as instruções do instalador
3. Inicie o WAMP Server (ícone verde na bandeja do sistema)

### Passo 2: Copiar os Arquivos

1. Localize a pasta de instalação do WAMP (geralmente `C:\wamp64\www\`)
2. Crie uma pasta chamada `sacra` dentro de `www`
3. Copie todos os arquivos deste projeto para `C:\wamp64\www\sacra\`

A estrutura final deve ficar assim:
```
C:\wamp64\www\sacra\
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       ├── portfolio-1.jpg
│       ├── portfolio-2.jpg
│       ├── portfolio-3.jpg
│       ├── portfolio-4.jpg
│       ├── portfolio-5.jpg
│       ├── portfolio-6.jpg
│       └── sobre-placeholder.jpg
├── logs/
├── index.html
├── send-email.php
└── README.md
```

### Passo 3: Configurar Permissões

1. Clique com o botão direito na pasta `logs`
2. Vá em Propriedades > Segurança
3. Certifique-se de que o usuário tem permissão de escrita

### Passo 4: Configurar o Email

Abra o arquivo `send-email.php` e edite as seguintes linhas:

```php
// Linha 26: Email de destino
$destinatario = 'seuemail@dominio.com.br';

// Linha 29: Nome da empresa
$nome_empresa = 'SACRA - Agência de Marketing';
```

### Passo 5: Acessar o Site

1. Certifique-se de que o WAMP está rodando (ícone verde)
2. Abra seu navegador
3. Acesse: `http://localhost/sacra/`

## ⚙️ Configuração do Envio de Emails

### Opção 1: Configurar SMTP no PHP (Recomendado)

Para envio real de emails, você precisa configurar o SMTP no arquivo `php.ini`:

1. Clique no ícone do WAMP na bandeja
2. Vá em PHP > php.ini
3. Procure por `[mail function]` e configure:

```ini
[mail function]
SMTP = smtp.seuservidor.com
smtp_port = 587
sendmail_from = noreply@seudominio.com.br
```

### Opção 2: Usar um Serviço de Email (Mais Fácil)

Você pode usar serviços como:
- **PHPMailer** com Gmail/Outlook
- **SendGrid**
- **Mailgun**
- **Amazon SES**

### Opção 3: Apenas Salvar em Arquivo (Para Testes)

O sistema já salva automaticamente todas as mensagens em:
```
logs/contatos_YYYY-MM.txt
```

Você pode verificar as mensagens recebidas neste arquivo enquanto não configura o email.

## 📝 Personalização

### Alterar Cores

Edite o arquivo `assets/css/style.css` nas linhas 18-23:

```css
:root {
    --color-primary: #C2185B;        /* Rosa principal */
    --color-primary-light: #F8BBD0;  /* Rosa claro */
    --color-primary-dark: #880E4F;   /* Rosa escuro */
    --color-secondary: #E91E63;      /* Rosa secundário */
}
```

### Alterar Conteúdo

Edite o arquivo `index.html` e modifique:
- Textos das seções
- Links das redes sociais
- Informações de contato
- Serviços oferecidos

### Adicionar/Remover Imagens do Portfólio

1. Adicione suas imagens na pasta `assets/img/`
2. Edite a seção Portfolio no `index.html` (linha ~280)
3. Substitua os caminhos das imagens

## 🔧 Solução de Problemas

### O site não abre

- Verifique se o WAMP está rodando (ícone verde)
- Tente acessar `http://localhost/` primeiro
- Verifique se não há outro servidor rodando na porta 80

### Formulário não envia

- Verifique se o PHP está ativo no WAMP
- Confira as configurações de email no `send-email.php`
- Verifique os logs em `logs/contatos_YYYY-MM.txt`
- Abra o Console do navegador (F12) para ver erros JavaScript

### Imagens não aparecem

- Verifique se as imagens estão na pasta `assets/img/`
- Confira os nomes dos arquivos (são case-sensitive)
- Limpe o cache do navegador (Ctrl + F5)

### Menu mobile não funciona

- Verifique se o JavaScript está carregando
- Abra o Console do navegador (F12) e procure por erros
- Certifique-se de que o arquivo `assets/js/script.js` existe

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- **Desktop**: 1920px, 1440px, 1280px, 1024px
- **Tablet**: 768px, 834px
- **Mobile**: 375px, 414px, 480px

## 🎯 Seções do Site

1. **Hero**: Apresentação inicial com slogan
2. **Sobre**: Informações sobre a agência
3. **Serviços**: 8 serviços principais oferecidos
4. **Portfólio**: Galeria de projetos com filtros
5. **CTA**: Chamada para ação
6. **Contato**: Formulário e informações de contato
7. **Footer**: Links e redes sociais

## 🌐 Navegadores Suportados

- Chrome (versão 90+)
- Firefox (versão 88+)
- Safari (versão 14+)
- Edge (versão 90+)
- Opera (versão 76+)

## 📄 Licença

Este projeto foi desenvolvido para uso exclusivo da agência SACRA.

## 👨‍💻 Suporte

Para dúvidas ou problemas:
- Email: contato@agenciasacra.com.br
- Instagram: @agenciasacra

## 📚 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização e animações
- **JavaScript (ES6+)**: Interatividade
- **PHP 7.4**: Backend e envio de emails
- **Font Awesome 6**: Ícones
- **Google Fonts**: Tipografia (Montserrat, Playfair Display)

## 🎨 Paleta de Cores

- **Rosa Principal**: #C2185B
- **Rosa Claro**: #F8BBD0
- **Rosa Escuro**: #880E4F
- **Rosa Secundário**: #E91E63
- **Branco**: #FFFFFF
- **Cinza Claro**: #F5F5F5
- **Cinza**: #9E9E9E
- **Cinza Escuro**: #424242

## ✨ Funcionalidades JavaScript

- Menu hambúrguer mobile
- Scroll suave entre seções
- Navegação ativa por scroll
- Botão voltar ao topo
- Filtro de portfólio
- Validação de formulário
- Animações ao scroll
- Efeito parallax no hero

## 🔒 Segurança

- Sanitização de inputs no PHP
- Proteção contra XSS
- Proteção contra spam
- Validação de email
- Headers de segurança
- Honeypot para bots

## 📊 Performance

- CSS e JS minificados
- Imagens otimizadas
- Lazy loading de imagens
- Código otimizado
- Cache de assets

---

**Desenvolvido com ❤️ para SACRA - Agência de Marketing Digital**

*A gente se acostumou a se apresentar pelo que faz. Mas e se, por um momento, a gente se apresentasse pelo que é?*
