class Car {
    constructor(type, color, engine, wheels) {
      this.type = type;
      this.color = color;
      this.engine = engine;
      this.wheels = wheels;
    }
  
    displaySpecs() {
      console.log(
        `Car specs: Type: ${this.type}, color: ${this.color}, engine: ${this.engine}, wheels: ${this.wheels}`
      );
    }
  }
  
  module.exports = Car;