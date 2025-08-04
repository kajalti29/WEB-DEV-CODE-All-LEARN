/*
class parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {}

let obj = new Child(); 
*/

class Person{
    eat(){
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}
//yaha pr hum doctor ko bhi le sakte hai//
class Engineer extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

let shradhObj = new Engineer();