const Car = require('./Car');

class SUV extends Car {
  constructor(color, engine, wheels) {
    super("SUV", color, engine, wheels);
  }
}

module.exports = SUV;