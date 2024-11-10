const OrderManager = require('./OrderManager');

class OrderManagerProxy {
  constructor() {
    this.orderManager = new OrderManager(); 
  }

  addOrder(car) {
    console.log(`Logging: Adding order for ${car.type}`);
    this.orderManager.addOrder(car); 
  }

  getOrders() {
    console.log('Logging: Retrieving orders');
    return this.orderManager.getOrders();
  }
}

module.exports = OrderManagerProxy;