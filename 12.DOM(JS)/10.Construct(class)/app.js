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
