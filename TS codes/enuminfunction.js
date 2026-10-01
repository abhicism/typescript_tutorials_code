"use strict";
var paymentstatus;
(function (paymentstatus) {
    paymentstatus["pending"] = "pending";
    paymentstatus["shipped"] = "shipped";
    paymentstatus["delivered"] = "delivered";
})(paymentstatus || (paymentstatus = {}));
function checkpayment(status) {
    if (status == paymentstatus.pending) {
        console.log("payment pending");
    }
    else if (status == paymentstatus.shipped) {
        console.log("payment shipped");
    }
    else if (status == paymentstatus.delivered) {
        console.log("payment delivered");
    }
}
checkpayment(paymentstatus.pending);
checkpayment(paymentstatus.shipped);
checkpayment(paymentstatus.delivered);
