class Uber {
    constructor(fare,waiting_charge){
        this.fare = fare;
        this.waiting_charge = waiting_charge
    }
    getPrice(){
        return this.fare + this.waiting_charge
    }
}

const passenger1 = new Uber(230,15);

console.log("Your fare for Travelling is "+passenger1.getPrice()+ " Rs");