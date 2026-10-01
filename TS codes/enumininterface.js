"use strict";
//enums work nicely with interfaces
// Define an enum for possible order statuses
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
// Create an object that conforms to the Order interface
const order = {
    id: 1,
    status: OrderStatus.Pending
};
// Log the order object to the console
console.log(order);
//op is { id: 1, status: 0 }
