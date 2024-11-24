class Car {
  constructor(type, color, engine, wheels) {
    this.type = type;
    this.color = color;
    this.engine = engine;
    this.wheels = wheels;
  }

  displaySpecs() {
    console.log(
      `Car specs: Type: ${this.type}, Color: ${this.color}, Engine: ${this.engine}, Wheels: ${this.wheels}`
    );
  }
}

module.exports = Car;