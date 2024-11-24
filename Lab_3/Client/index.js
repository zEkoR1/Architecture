const OrderFacade = require('../Domain/Facade/OrderFacade');

const orderFacade = new OrderFacade();

orderFacade.placeOrder('Sedan', 20000); 
orderFacade.placeOrder('SUV', 30000);   

console.log('Order list:');
orderFacade.viewOrders().forEach(order => order.displaySpecs());