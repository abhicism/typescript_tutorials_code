//An enum (enumeration) is used when a variable should have one value from a fixed set of named choices.

enum OrderStatus {
    Pending,
    Shipped,
    Delivered
}
//enum variable
let status : OrderStatus = OrderStatus.Pending; 

console.log(status); // Output: 0 (by default, enums are number-based starting from 0)