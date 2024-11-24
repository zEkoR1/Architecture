const CarFactory = require('../Factory/CarFactory');
const OrderManagerProxy = require('../Models/OrderManagerProxy');
const PaymentProcessor = require('../../Utilities/PaymentProcessor');
const EmailService = require('../../Utilities/EmailService');

class OrderFacade {
  constructor() {
    this.orderManager = new OrderManagerProxy();
    this.paymentProcessor = new PaymentProcessor();
    this.emailService = new EmailService();

    this.orderManager.registerObserver(this.emailService);
  }

  placeOrder(carType, amount) {
    const car = CarFactory.createCar(carType);
    this.orderManager.addOrder(car);
    car.displaySpecs();
    this.paymentProcessor.pay(amount);
  }

  viewOrders() {
    return this.orderManager.getOrders();
  }
}

module.exports = OrderFacade;