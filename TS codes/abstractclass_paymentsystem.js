"use strict";
class payment {
}
// Concrete class for Credit Card payments
class creditcard extends payment {
    // Implementation of the pay method for Credit Card
    pay(amount) {
        console.log("Paid £" + amount + " using Credit Card");
    }
}
class upi extends payment {
    pay(amount) {
        console.log("Paid £" + amount + " using UPI");
    }
}
//create objects for the class
const card = new creditcard();
//call pay method with obj
card.pay(500);
//another object for upi
const UPI = new upi();
UPI.pay(500);
