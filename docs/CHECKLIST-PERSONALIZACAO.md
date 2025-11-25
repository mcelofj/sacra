# ✅ Checklist de Personalização - SACRA Landing Page

Use este checklist para personalizar completamente o site da SACRA.

## 📧 1. Configurações de Email

### send-email.php
- [ ] Alterar email de destino (linha 26)
  ```php
  $destinatario = 'seuemail@dominio.com.br';
  ```
- [ ] Alterar nome da empresa (linha 29)
  ```php
  $nome_empresa = 'SACRA - Agência de Marketing';
  ```

### index.html - Seção Contato
- [ ] Email de contato (linha ~420)
- [ ] Telefone (linha ~428)
- [ ] Endereço/Localização (linha ~436)

## 🎨 2. Identidade Visual

### Cores (assets/css/style.css - linha 18)
- [ ] Rosa principal: `--color-primary: #C2185B;`
- [ ] Rosa claro: `--color-primary-light: #F8BBD0;`
- [ ] Rosa escuro: `--color-primary-dark: #880E4F;`
- [ ] Rosa secundário: `--color-secondary: #E91E63;`

### Logo
- [ ] Criar favicon (16x16, 32x32, 64x64)
- [ ] Salvar como `assets/img/favicon.png`
- [ ] Atualizar referência no HTML (linha 14)

## 📝 3. Conteúdo do Site

### Hero Section (index.html - linha ~50)
- [ ] Slogan principal
- [ ] Texto secundário
- [ ] Texto da pergunta
- [ ] Textos dos botões

### Sobre (linha ~85)
- [ ] Título da seção
- [ ] Texto descritivo (2 parágrafos)
- [ ] Features/Características (4 itens)
- [ ] Imagem da equipe

### Serviços (linha ~125)
- [ ] Título da seção
- [ ] Subtítulo
- [ ] Descrição de cada serviço (8 cards)
- [ ] Ícones dos serviços

### Portfólio (linha ~235)
- [ ] Título da seção
- [ ] Categorias de filtro
- [ ] Imagens dos projetos (6 itens)
- [ ] Títulos e descrições

### CTA (linha ~330)
- [ ] Título da chamada
- [ ] Subtítulo
- [ ] Texto do botão

### Footer (linha ~480)
- [ ] Texto descritivo
- [ ] Links rápidos
- [ ] Lista de serviços
- [ ] Ano do copyright

## 🖼️ 4. Imagens

### Substituir Imagens Placeholder
- [ ] `assets/img/sobre-placeholder.jpg` - Foto da equipe
- [ ] `assets/img/portfolio-1.jpg` - Projeto 1
- [ ] `assets/img/portfolio-2.jpg` - Projeto 2
- [ ] `assets/img/portfolio-3.jpg` - Projeto 3
- [ ] `assets/img/portfolio-4.jpg` - Projeto 4
- [ ] `assets/img/portfolio-5.jpg` - Projeto 5
- [ ] `assets/img/portfolio-6.jpg` - Projeto 6

### Adicionar Novas Imagens
- [ ] Criar pasta para cada categoria se necessário
- [ ] Otimizar imagens (recomendado: máx 200KB cada)
- [ ] Usar formatos modernos (WebP, JPEG otimizado)

## 🌐 5. Redes Sociais

### Links das Redes (index.html)
- [ ] Instagram (linhas ~455, ~505)
- [ ] Behance (linhas ~458, ~508)
- [ ] LinkedIn (linhas ~461, ~511)
- [ ] Facebook (linha ~464)

### Atualizar URLs
```html
<a href="https://instagram.com/agenciasacra" target="_blank">
<a href="https://behance.net/agenciasacra" target="_blank">
<a href="https://linkedin.com/company/agenciasacra" target="_blank">
<a href="https://facebook.com/agenciasacra" target="_blank">
```

## 📱 6. Informações de Contato

### Dados para Atualizar
- [ ] Email principal
- [ ] Telefone/WhatsApp
- [ ] Endereço físico (se aplicável)
- [ ] Horário de atendimento (se aplicável)

## 🔍 7. SEO e Meta Tags

### index.html (linhas 5-9)
- [ ] Meta description
- [ ] Meta keywords
- [ ] Meta author
- [ ] Title da página
- [ ] Open Graph tags (adicionar se necessário)

```html
<meta name="description" content="Sua descrição aqui">
<meta name="keywords" content="suas, palavras-chave, aqui">
<meta name="author" content="SACRA">
<title>SACRA - Agência de Marketing Digital</title>
```

## ⚙️ 8. Configurações Técnicas

### .htaccess
- [ ] Atualizar RewriteBase se necessário (linha 9)
- [ ] Configurar domínio real (linha 88)
- [ ] Descomentar força HTTPS quando tiver SSL (linha 156)

### PHP
- [ ] Testar envio de email
- [ ] Verificar permissões da pasta logs
- [ ] Configurar SMTP se necessário

## 🎯 9. Funcionalidades Opcionais

### Adicionar
- [ ] Google Analytics
- [ ] Facebook Pixel
- [ ] Google Tag Manager
- [ ] Chat online (Tawk.to, Zendesk, etc)
- [ ] WhatsApp flutuante
- [ ] Cookie consent banner

### Integrações
- [ ] CRM (RD Station, HubSpot, etc)
- [ ] Email marketing (Mailchimp, etc)
- [ ] Automação de marketing

## 📊 10. Testes Finais

### Funcionalidade
- [ ] Testar menu desktop
- [ ] Testar menu mobile
- [ ] Testar todos os links
- [ ] Testar formulário de contato
- [ ] Testar filtros do portfólio
- [ ] Testar botão voltar ao topo
- [ ] Testar scroll suave

### Responsividade
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (768px, 834px)
- [ ] Mobile (375px, 414px, 480px)

### Navegadores
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Opera

### Performance
- [ ] Velocidade de carregamento
- [ ] Otimização de imagens
- [ ] Minificação de CSS/JS (opcional)
- [ ] Cache do navegador

### SEO
- [ ] Títulos e meta tags
- [ ] Alt text nas imagens
- [ ] Estrutura de headings (H1, H2, H3)
- [ ] URLs amigáveis
- [ ] Sitemap (criar se necessário)

## 🚀 11. Deploy

### Preparação
- [ ] Fazer backup de todos os arquivos
- [ ] Testar em ambiente local
- [ ] Verificar todas as configurações
- [ ] Preparar domínio e hospedagem

### Hospedagem
- [ ] Contratar hospedagem (se necessário)
- [ ] Configurar domínio
- [ ] Instalar SSL/HTTPS
- [ ] Fazer upload dos arquivos
- [ ] Configurar email no servidor

### Pós-Deploy
- [ ] Testar site no ar
- [ ] Verificar formulário de contato
- [ ] Testar em diferentes dispositivos
- [ ] Configurar backups automáticos
- [ ] Monitorar erros (logs)

## 📈 12. Manutenção

### Mensal
- [ ] Verificar logs de contato
- [ ] Atualizar portfólio
- [ ] Verificar links quebrados
- [ ] Analisar métricas

### Trimestral
- [ ] Atualizar conteúdo
- [ ] Revisar SEO
- [ ] Otimizar performance
- [ ] Backup completo

---

## 📝 Notas Importantes

1. **Sempre faça backup antes de fazer alterações**
2. **Teste em ambiente local antes de publicar**
3. **Mantenha os arquivos originais como referência**
4. **Documente todas as personalizações feitas**
5. **Use controle de versão (Git) se possível**

---

**Desenvolvido para SACRA - Agência de Marketing Digital**

*Última atualização: Novembro 2024*
