// Define an enum to represent possible payment statuses
enum paymentstatus {
    pending = "pending",     // Payment is not yet processed
    shipped = "shipped",     // Payment has been processed and item shipped
    delivered = "delivered"  // Item has been delivered after payment
}

// Function to check the current payment status and log a message
function checkpayment(status : paymentstatus):void{
    if (status == paymentstatus.pending){
        console.log("payment pending");   // Logs when status is pending
    }
    else if (status == paymentstatus.shipped){
        console.log("payment shipped");   // Logs when status is shipped
    }
    else if (status == paymentstatus.delivered){
        console.log("payment delivered"); // Logs when status is delivered
    }
}

// Calling the function with different enum values
checkpayment(paymentstatus.pending);   // Output: payment pending
checkpayment(paymentstatus.shipped);   // Output: payment shipped
checkpayment(paymentstatus.delivered); // Output: payment delivered
