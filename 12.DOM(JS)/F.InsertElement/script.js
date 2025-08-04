let newHeading  = document.createElement("h1");
newHeading.innerText = "Hi, I am new!";

document.querySelector("body").prepend(newHeading);


//btn create karna
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);



//insert Element apply
let div = document.querySelector("div");
div.append(newBtn);// yaha pr apana prepend, bedore,after use kr sakte hai


//delet Element
let parah = document.querySelector("p")
parah.remove();