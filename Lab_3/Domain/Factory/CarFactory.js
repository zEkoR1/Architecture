const CarBuilder = require('../CarBuilder/CarBuilder');

class CarFactory {
  static createCar(type) {
    const builder = new CarBuilder();

    switch (type) {
      case 'Sedan':
        return builder.setColor("Blue").setEngine("Gas").setWheels("Default").build(type);
      case 'SUV':
        return builder.setColor("Black").setEngine("Diesel").setWheels("Not-Default").build(type);
      default:
        throw new Error('Unknown type of the car');
    }
  }
}

module.exports = CarFactory;