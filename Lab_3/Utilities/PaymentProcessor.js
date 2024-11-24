const ExternalPaymentService = require('./ExternalPaymentService');

class PaymentProcessor {
  constructor() {
    this.externalService = new ExternalPaymentService(); 
  }

  pay(amount) {
    this.externalService.processPayment(amount); 
  }
}

module.exports = PaymentProcessor;