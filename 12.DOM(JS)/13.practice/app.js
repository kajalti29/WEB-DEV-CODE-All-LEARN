/*You are creating a website for your collage.
 Create a class User with 2 properties, name & email. 
 It also has a method  called viewData() that allows user to view website DataTransfer.*/


 /*
 let DATA = "secret information";
 class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    
    viewData() {
        console.log("data =", DATA);
    }
 }

 let student1 =  new User("shradha", "abc@gmail.com");
  let student2 =  new User("aman", "aman@gmail.com");

   let teacher =  new User("shradha", "prq@gmail.com");
   */


  // Create a new class Admin which inherits from User.Add a new method called editData to Admin that allows it to edit website data// 
let DATA = "secret information";
 class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    
    viewData() {
        console.log("data =", DATA);
    }
 }

 class Admin extends User {
        constructor(name,email){
            super(name,email);
        }


        editData(){
            DATA = "some new value";
        }
 }

 let Admin1 =  new User("kajalti", "abc@globalThis.com");