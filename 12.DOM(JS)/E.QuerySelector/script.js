// Select the h1 by ID
let heading = document.querySelector("#title");

// Select the button
let button = document.querySelector("button");

// Add click event to button
button.addEventListener("click", function () {
  heading.style.color = "red";
  heading.innerText = "Text Changed!";
});
