//जब आप object से value लेना चाहते हो, तो getter काम आता है।
let person = {
    firstName:"kaju",
    LastName:"sirame",


    get fullName(){
        return this.firstName + " " + this.LastName;
    }
};

console.log(person.fullName);