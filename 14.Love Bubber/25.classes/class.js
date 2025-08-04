//Classe
class Human {
    //Properties
    age = 13; //public
    wt = 80;  
    ht = 180;

    //Behavior
    walking(){
        console.log("I am walking")
    }

    running(){
        console.log("I am running");
    }
}

let obj = new Human();
console.log(obj.age);

obj.walking();