const CarFactory = require('..\\Domain\\Factory\\CarFactory.js');
const OrderManager = require('..\\Domain\\Models\\OrderManager.js');

const orderManager = new OrderManager();

const sedan = CarFactory.createCar('Sedan');
sedan.displaySpecs();
orderManager.addOrder(sedan);

const suv = CarFactory.createCar('SUV');
suv.displaySpecs();
orderManager.addOrder(suv);

console.log('Order list:');
orderManager.getOrders().forEach(order => order.displaySpecs());