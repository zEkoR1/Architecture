class Observer {
    update(order) {
      throw new Error("This method should be overridden");
    }
  }
  
  module.exports = Observer;