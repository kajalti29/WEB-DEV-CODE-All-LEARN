// Setter(set):-जब आप object की value set/update करना चाहते हो, तो setter use होता है।

let person = {
    firstName:"kaju",
    lastName:"sirame",

    set fullName(name) {

        let parts = name.split(" ")
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = "pooja Verma";
console.log(person.firstName);
console.log(person.lastName);
