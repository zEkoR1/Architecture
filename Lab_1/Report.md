# Creational Design Patterns Project

## Objectives:
1. **Study and understand the Creational Design Patterns**.
2. **Choose a domain**, define its main classes/models/entities, and choose appropriate instantiation mechanisms.
3. **Use some creational design patterns** for object instantiation in a sample project.

## Some Theory:
In software engineering, **Creational Design Patterns** provide general solutions to manage the creation of objects. Creating objects directly using basic methods can introduce design problems or unnecessary complexity. Creational patterns optimize, hide, or control how objects are created, ensuring flexibility and improved maintainability in the system.

### Examples of Creational Design Patterns:
- **Singleton**: Ensures that a class has only one instance and provides a global point of access to it.
- **Builder**: Constructs complex objects step by step.
- **Prototype**: Allows copying an existing object rather than creating a new instance from scratch.
- **Object Pooling**: Manages the reuse of objects instead of creating new ones frequently.
- **Factory Method**: Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.
- **Abstract Factory**: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

## Domain Overview:
For this project, I chose the domain of **Car Order Management**. This system allows users to create and order cars with different specifications. The system handles different car types, such as **Sedan**, **SUV**, and **SportsCar**, and provides an interface for building cars with various configurations (color, engine type, wheel type).

### Main Classes and Entities:
1. **Car**: The base class representing a car with its essential properties such as type, color, engine, and wheels.
2. **Sedan, SUV, SportsCar**: Specific car types that inherit from the `Car` class.
3. **OrderManager**: A singleton class responsible for managing the car orders, ensuring that only one instance of the order manager exists at a time.
4. **CarBuilder**: A builder class that allows step-by-step construction of car objects with customizable attributes.
5. **CarFactory**: Implements the factory method pattern to create different types of cars based on user input.

## Creational Design Patterns Implemented:
1. **Singleton**: Used in the `OrderManager` class to ensure that there is only one instance managing all orders in the system.
2. **Builder**: Used in the `CarBuilder` class to allow the construction of cars in a flexible and step-by-step manner.
3. **Factory Method**: Used in the `CarFactory` class to create different types of cars (Sedan, SUV, SportsCar) based on the user’s request.

## Project Structure:

```
/car-order-system
│
├── /client
│   └── index.js                # Main entry point for running the program
│
├── /domain
│   ├── /factory
│   │   └── CarFactory.js        # Factory Method for car creation
│   │
│   ├── /models
│   │   ├── Car.js               # Base Car class
│   │   ├── Sedan.js             # Sedan class
│   │   ├── SUV.js               # SUV class
│   │   ├── SportsCar.js         # SportsCar class
│   │   ├── OrderManager.js      # Singleton for managing car orders
│   │   └── CarBuilder.js        # Builder for step-by-step car W
│
└── README.md                    # Project description and setup instructions
```

### Description of Each Module:
- **client/index.js**: This is the main entry point of the program. It handles the creation of car objects using the factory and adds them to the order list managed by the singleton `OrderManager`.
- **domain/factory/CarFactory.js**: Implements the **Factory Method** pattern. This factory is responsible for creating car objects of various types (`Sedan`, `SUV`, `SportsCar`) based on user input.
- **domain/models/Car.js**: The base `Car` class defines common attributes for all cars such as type, color, engine, and wheels.
- **domain/models/Sedan.js**, **domain/models/SUV.js**, **domain/models/SportsCar.js**: These classes extend the `Car` class and represent specific types of cars.
- **domain/models/OrderManager.js**: Implements the **Singleton** pattern to ensure there is only one instance of the `OrderManager` class. This class manages car orders and ensures that all operations related to orders are centralized.
- **domain/models/CarBuilder.js**: Implements the **Builder** pattern. This class allows building a car object step by step, offering methods to set the car’s color, engine type, and wheels before finalizing the creation.

## Example Usage:

```javascript
const CarFactory = require('../domain/factory/CarFactory');
const OrderManager = require('../domain/models/OrderManager');

const orderManager = new OrderManager();

// Create a Sedan using CarFactory and add it to orders
const sedan = CarFactory.createCar('Sedan');
sedan.displaySpecs();
orderManager.addOrder(sedan);

// Create an SUV using CarFactory and add it to orders
const suv = CarFactory.createCar('SUV');
suv.displaySpecs();
orderManager.addOrder(suv);

// Output the list of all ordered cars
console.log('Order list:');
orderManager.getOrders().forEach(order => order.displaySpecs());
```

## Conclusion:
1. **Creational Design Patterns Implemented**: The project successfully implements three key creational design patterns: **Singleton**, **Builder**, and **Factory Method**.
2. **Modular Design**: The project is divided into clear modules/packages:
   - **client**: Handles interaction with the user.
   - **domain**: Contains the core logic and models, including factories, car classes, and the order manager.
3. **Git Repository**: The project is hosted in a Git repository for easy access and collaboration.

---

This report covers all the requirements and explains the implementation of creational design patterns within the chosen domain. If you have any further questions or need additional details, feel free to review the code in the repository.

