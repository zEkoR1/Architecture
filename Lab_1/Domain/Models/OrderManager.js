class OrderManager {
  constructor() {
    if (OrderManager.instance) {
      return OrderManager.instance;
    }
    this.orders = [];
    OrderManager.instance = this;
  }

  addOrder(car) {
    this.orders.push(car);
    console.log(`The car ${car.type} was ordered`);
  }

  getOrders() {
    return this.orders;
  }
}

module.exports = OrderManager;