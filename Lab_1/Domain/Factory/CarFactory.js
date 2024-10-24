const CarBuilder = require('../Models/CarBuilder');

class CarFactory {
  static createCar(type) {
    const builder = new CarBuilder();

    switch (type) {
      case 'Sedan':
        return builder.setColor("Blue").setEngine("Gas").setWheels("Default").build('Sedan');
      case 'SUV':
        return builder.setColor("Black").setEngine("Diesel").setWheels("Not-Default").build('SUV');
      default:
        throw new Error('Unknown type of the car');
    }
  }
}

module.exports = CarFactory;