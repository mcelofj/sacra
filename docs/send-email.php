<?php
/**
 * SACRA - Landing Page
 * Script de Envio de Email do Formulário de Contato
 * Compatível com PHP 7.4.33
 */

// Configurações de segurança
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Inicializar resposta
$response = [
    'success' => false,
    'message' => ''
];

// Verificar se é uma requisição POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $response['message'] = 'Método de requisição inválido.';
    echo json_encode($response);
    exit;
}

// ===================================
// CONFIGURAÇÕES DE EMAIL
// ===================================

// Email de destino (onde as mensagens serão recebidas)
$destinatario = 'contato@agenciasacra.com.br';

// Nome do remetente (nome da empresa)
$nome_empresa = 'SACRA - Agência de Marketing';

// Assunto padrão do email
$assunto_padrao = 'Nova mensagem do site SACRA';

// ===================================
// VALIDAÇÃO E SANITIZAÇÃO DOS DADOS
// ===================================

// Função para sanitizar dados
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Função para validar email
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Capturar e sanitizar dados do formulário
$nome = isset($_POST['nome']) ? sanitizeInput($_POST['nome']) : '';
$email = isset($_POST['email']) ? sanitizeInput($_POST['email']) : '';
$telefone = isset($_POST['telefone']) ? sanitizeInput($_POST['telefone']) : '';
$assunto = isset($_POST['assunto']) ? sanitizeInput($_POST['assunto']) : '';
$mensagem = isset($_POST['mensagem']) ? sanitizeInput($_POST['mensagem']) : '';

// ===================================
// VALIDAÇÕES
// ===================================

// Validar campos obrigatórios
if (empty($nome)) {
    $response['message'] = 'Por favor, informe seu nome.';
    echo json_encode($response);
    exit;
}

if (empty($email)) {
    $response['message'] = 'Por favor, informe seu email.';
    echo json_encode($response);
    exit;
}

if (empty($mensagem)) {
    $response['message'] = 'Por favor, escreva uma mensagem.';
    echo json_encode($response);
    exit;
}

// Validar formato do email
if (!isValidEmail($email)) {
    $response['message'] = 'Por favor, informe um email válido.';
    echo json_encode($response);
    exit;
}

// Validar tamanho da mensagem
if (strlen($mensagem) < 10) {
    $response['message'] = 'A mensagem deve ter no mínimo 10 caracteres.';
    echo json_encode($response);
    exit;
}

// Validar tamanho máximo da mensagem
if (strlen($mensagem) > 5000) {
    $response['message'] = 'A mensagem é muito longa. Máximo de 5000 caracteres.';
    echo json_encode($response);
    exit;
}

// ===================================
// PROTEÇÃO CONTRA SPAM
// ===================================

// Verificar se há links suspeitos na mensagem (proteção básica contra spam)
$spam_patterns = [
    '/\[url=/i',
    '/\[link=/i',
    '/<a href=/i',
    '/http:\/\//i',
    '/https:\/\//i'
];

foreach ($spam_patterns as $pattern) {
    if (preg_match($pattern, $mensagem)) {
        $response['message'] = 'Mensagem contém conteúdo suspeito.';
        echo json_encode($response);
        exit;
    }
}

// Verificar honeypot (campo oculto para pegar bots)
if (isset($_POST['website']) && !empty($_POST['website'])) {
    $response['message'] = 'Erro ao enviar mensagem.';
    echo json_encode($response);
    exit;
}

// ===================================
// CONSTRUÇÃO DO EMAIL
// ===================================

// Assunto do email
$email_assunto = !empty($assunto) ? $assunto : $assunto_padrao;
$email_assunto = "[$nome_empresa] $email_assunto";

// Corpo do email em HTML
$email_corpo = "
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Nova Mensagem - SACRA</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #C2185B 0%, #E91E63 100%);
            color: #ffffff;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .content {
            padding: 30px;
        }
        .field {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eeeeee;
        }
        .field:last-child {
            border-bottom: none;
        }
        .field-label {
            font-weight: 700;
            color: #C2185B;
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .field-value {
            font-size: 16px;
            color: #333;
            word-wrap: break-word;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #999;
        }
        .message-box {
            background-color: #f8f8f8;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #C2185B;
        }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>sacra.</h1>
            <p style='margin: 10px 0 0 0; font-size: 16px;'>Nova mensagem recebida</p>
        </div>
        
        <div class='content'>
            <div class='field'>
                <div class='field-label'>Nome</div>
                <div class='field-value'>$nome</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Email</div>
                <div class='field-value'><a href='mailto:$email' style='color: #C2185B; text-decoration: none;'>$email</a></div>
            </div>
            
            " . (!empty($telefone) ? "
            <div class='field'>
                <div class='field-label'>Telefone</div>
                <div class='field-value'>$telefone</div>
            </div>
            " : "") . "
            
            <div class='field'>
                <div class='field-label'>Assunto</div>
                <div class='field-value'>$assunto</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Mensagem</div>
                <div class='message-box'>
                    <div class='field-value'>" . nl2br($mensagem) . "</div>
                </div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Data e Hora</div>
                <div class='field-value'>" . date('d/m/Y H:i:s') . "</div>
            </div>
        </div>
        
        <div class='footer'>
            <p>Esta mensagem foi enviada através do formulário de contato do site SACRA.</p>
            <p>&copy; " . date('Y') . " SACRA - Agência de Marketing Digital</p>
        </div>
    </div>
</body>
</html>
";

// ===================================
// HEADERS DO EMAIL
// ===================================

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $nome_empresa . ' <noreply@agenciasacra.com.br>',
    'Reply-To: ' . $nome . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
    'X-Priority: 1',
    'Importance: High'
];

$headers_string = implode("\r\n", $headers);

// ===================================
// ENVIO DO EMAIL
// ===================================

try {
    // Tentar enviar o email
    $email_enviado = mail($destinatario, $email_assunto, $email_corpo, $headers_string);
    
    if ($email_enviado) {
        // ===================================
        // SALVAR EM ARQUIVO (BACKUP)
        // ===================================
        
        // Criar diretório de logs se não existir
        $log_dir = __DIR__ . '/logs';
        if (!file_exists($log_dir)) {
            mkdir($log_dir, 0755, true);
        }
        
        // Salvar dados em arquivo de log
        $log_file = $log_dir . '/contatos_' . date('Y-m') . '.txt';
        $log_content = "\n" . str_repeat('=', 80) . "\n";
        $log_content .= "Data/Hora: " . date('d/m/Y H:i:s') . "\n";
        $log_content .= "Nome: $nome\n";
        $log_content .= "Email: $email\n";
        $log_content .= "Telefone: $telefone\n";
        $log_content .= "Assunto: $assunto\n";
        $log_content .= "Mensagem:\n$mensagem\n";
        $log_content .= str_repeat('=', 80) . "\n";
        
        file_put_contents($log_file, $log_content, FILE_APPEND);
        
        // Resposta de sucesso
        $response['success'] = true;
        $response['message'] = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
    } else {
        // Erro ao enviar email
        $response['message'] = 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email.';
        
        // Log do erro
        error_log("Erro ao enviar email de contato - Nome: $nome, Email: $email");
    }
    
} catch (Exception $e) {
    // Erro na execução
    $response['message'] = 'Erro ao processar sua solicitação. Tente novamente mais tarde.';
    error_log("Exceção ao enviar email: " . $e->getMessage());
}

// ===================================
// RETORNAR RESPOSTA JSON
// ===================================

echo json_encode($response);
exit;
?>
