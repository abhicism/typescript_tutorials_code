"use strict";
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["Shipped"] = 2] = "Shipped";
    Status[Status["Delivered"] = 3] = "Delivered";
})(Status || (Status = {}));
let orderStatus = Status.Delivered;
console.log(orderStatus);
