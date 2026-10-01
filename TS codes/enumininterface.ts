//enums work nicely with interfaces

// Define an enum for possible order statuses
enum OrderStatus {
    Pending,   // By default, enums in TypeScript assign numeric values starting from 0
    Shipped,   // This will be 1
    Delivered  // This will be 2
}

// Define an interface for an Order, which includes an id and a status from the OrderStatus enum
interface Order {
    id: number;          // Numeric identifier for the order
    status: OrderStatus; // Status must be one of the enum values
}

// Create an object that conforms to the Order interface
const order: Order = {
    id: 1,                   // Assigning id as 1
    status: OrderStatus.Pending // Assigning status as Pending, which is internally represented as 0
}

// Log the order object to the console
console.log(order); 
// Output: { id: 1, status: 0 }
// Explanation: Enums in TypeScript are compiled to numbers by default.
// "Pending" corresponds to 0, so when logged, the numeric value is shown instead of the enum name.
