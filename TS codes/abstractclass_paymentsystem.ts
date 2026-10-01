abstract class payment {
    // Abstract method: subclasses must implement this method to define how payment is made
    abstract pay (amount : number): void;

}

// Concrete class for Credit Card payments
class creditcard extends payment {
    // Implementation of the pay method for Credit Card
    pay (amount :number) : void {
         console.log("Paid £" + amount + " using Credit Card");
    }
}

class upi extends payment {
    pay(amount: number): void {
         console.log("Paid £" + amount + " using UPI"); 
    }
}

//create objects for the class

const card = new creditcard();
//call pay method with obj
card.pay(500);  //Paid £500 using Credit Card

//another object for upi
const UPI = new upi();
UPI.pay(500); //Paid £500 using UPI