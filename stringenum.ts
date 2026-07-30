//this is often easier to understand in application code

enum Status {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED"
}

let orderstatus = Status.Delivered;
console.log(orderstatus);   //op is delivered