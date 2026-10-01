enum orderstatus {
    pending = "PENDING",
    shipped = "SHIPPED",
    delivered = "DELIVERED"
}

function showstatus(status: orderstatus):void{
    switch(status){
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