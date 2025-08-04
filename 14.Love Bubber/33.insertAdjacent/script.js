let mydiv = document.querySelector("#mydiv");

// Create a new span element
let newElement = document.createElement('span');
newElement.textContent = "Love Babbar";

// Insert it before the div
mydiv.insertAdjacentElement('beforebegin', newElement);
//yaha pr hum beforebegin, afterbegin, beforeend, afterend
