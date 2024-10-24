const CarFactory = require('..\\Domain\\Factory\\CarFactory.js')
const OrderManager = require('..\\Domain\\Models\\OrderManager.js')
const orderManager  = new OrderManager();
const sedan = CarFactory.createCar('Sedan')
sedan.displaySpecs();
orderManager.addOrder(sedan);
const SUV = CarFactory.createCar('SUV')
SUV.displaySpecs();
orderManager.addOrder(SUV);
console.log(`Order list: `)
orderManager.getOrders().forEach (order => displaySpecs());