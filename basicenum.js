"use strict";
//An enum (enumeration) is used when a variable should have one value from a fixed set of named choices.
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
//enum variable
let status = OrderStatus.Pending;
console.log(status); // Output: 0 (by default, enums are number-based starting from 0)
