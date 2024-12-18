class CarBuilder {
  constructor() {
    this.color = "White";
    this.engine = "Gas";
    this.wheels = "Default";
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setEngine(engine) {
    this.engine = engine;
    return this;
  }

  setWheels(wheels) {
    this.wheels = wheels;
    return this;
  }

  build(type) {
    const CarClass = require(`../Models/${type}`);
    return new CarClass(type, this.color, this.engine, this.wheels);
  }
}

module.exports = CarBuilder;