class OrderManager {
  constructor() {
    if (OrderManager.instance) {
      return OrderManager.instance;
    }
    this.orders = [];
    this.observers = [];
    OrderManager.instance = this;
  }

  addOrder(car) {
    this.orders.push(car);
    console.log(`The car ${car.type} was ordered`);
    this.notifyObservers(car);
  }

  getOrders() {
    return this.orders;
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(order) {
    this.observers.forEach(observer => observer.update(order));
  }
}

module.exports = OrderManager;