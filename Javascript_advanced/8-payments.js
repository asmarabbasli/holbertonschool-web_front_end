function processPayment(amount) {
    console.log(`Processing payment of $${amount}`);
}
function processOrder(orderId, amount) {
    console.log(`Processing order #${orderId}`);
    processPayment(amount);
    console.log(`Order #${orderId} processed successfully`);
}
console.log("Processing orders");
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log("All the orders have been processed");