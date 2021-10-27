class Uber {
    constructor(fare,waiting_charge){                   //initiliase the uber fare for the passenger
        this.fare = fare;
        this.waiting_charge = waiting_charge
    }
    getPrice(){
        return this.fare + this.waiting_charge          // return the total payable amount of the passenger
    }
}

const passenger1 = new Uber(230,15);                    //passing the fare amount of the passenger

console.log("Your fare for Travelling is "+passenger1.getPrice()+ " Rs");    //Display the user total amount payable
