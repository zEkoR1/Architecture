const Car = require('./Car');

class Sedan extends Car {
  constructor(color, engine, wheels) {
    super("Sedan", color, engine, wheels);
  }
}

module.exports = Sedan;