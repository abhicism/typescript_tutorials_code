"use strict";
//this is often easier to understand in application code
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Shipped"] = "SHIPPED";
    Status["Delivered"] = "DELIVERED";
})(Status || (Status = {}));
let orderstatus = Status.Delivered;
console.log(orderstatus);
