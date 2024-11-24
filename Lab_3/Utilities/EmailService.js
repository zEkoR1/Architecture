const Observer = require('./Observer');

class EmailService extends Observer {
  update(order) {
    console.log(`EmailService: Notifying about new order for ${order.type}`);
  }
}

module.exports = EmailService;