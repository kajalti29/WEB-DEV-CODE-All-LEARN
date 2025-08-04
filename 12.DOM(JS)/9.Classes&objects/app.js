/*const student = {
    fullName:"kajalti sirame",
    marks:94.4,
    printMarks: function() {
        console.log("marks =", this.marks);
    }  
};
*/
//this is object//
/*const employee = {
    calcTax(){
        console.log("tax rate is 10%")
    },
    calcTax2 : function () {
        console.log("tax rate is 10%");
    }
};



const karanArjun = {
    salary: 50000,
    calcTax(){
    console.log("tac rate is 20%");
    },
};

karanArjun.__proto__ = employee;
*/

//this is class//
class ToyotaCar  {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand)  {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");



/*✅ Constructor wala version:

class ToyotaCar {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(this.brand + " started");
    }

    stop() {
        console.log(this.brand + " stopped");
    }
}

let fortuner = new ToyotaCar("Fortuner");
fortuner.start();  // Fortuner started
*/

