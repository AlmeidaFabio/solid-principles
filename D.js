// Dependency Inversion Principle (Princípio da Inversão de Dependência):

// Suponha que temos um serviço de envio de e-mails que depende diretamente de uma implementação concreta de uma classe de configuração. Podemos usar injeção de dependência para inverter a dependência:

class EmailService {
    constructor(config) {
        this.config = config;
    }

    sendEmail() {
        // lógica para enviar e-mail usando this.config
        console.log('Enviando e-mail...');
    }
}

class EmailConfig {
    constructor() {
        this.smtpServer = 'smtp.example.com';
        this.port = 587;
        // outras configurações...
    }
}

const emailConfig = new EmailConfig();
const emailService = new EmailService(emailConfig);
emailService.sendEmail();


// Neste exemplo, EmailService depende de uma interface EmailConfig em vez de uma implementação concreta, permitindo que diferentes configurações de e-mail sejam facilmente injetadas. Isso ajuda a isolar a lógica de envio de e-mail da lógica de configuração.