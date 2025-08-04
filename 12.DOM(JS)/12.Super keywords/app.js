class Parent{
    constructor() {
        console.log("enter parent constructor");
        this.species = "home species";
    }

eat() {
    console.log("eat");
  }
}




/*
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // 👈 Parent method ko bhi call karo
    console.log("Dog barks");
  }
}

let d = new Dog();
d.speak();
*/
