"use strict";
var orderstatus;
(function (orderstatus) {
    orderstatus["pending"] = "PENDING";
    orderstatus["shipped"] = "SHIPPED";
    orderstatus["delivered"] = "DELIVERED";
})(orderstatus || (orderstatus = {}));
function showstatus(status) {
    switch (status) {
        case orderstatus.pending:
            console.log("order is pending");
            break;
        case orderstatus.shipped:
            console.log("order is shipped");
            break;
        case orderstatus.delivered:
            console.log("order is delivered");
            break;
    }
}
showstatus(orderstatus.shipped);
