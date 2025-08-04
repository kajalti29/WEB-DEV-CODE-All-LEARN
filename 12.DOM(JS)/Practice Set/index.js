
/*Create a new button element.
Give it a text "click me",background color of red & text color of white.
insert the button as the first element inside the body tag.*/

let button = document.createElement("button");
newBtn.textContent = "click me!";
btn.style.backgroundColor = "red";
btn.style.Color = "white";

//document.querySelector("body").prepend(btn); (hum ye bhi likh sakte hai)
document.body.insertBefore(btn,document.body.firstChild);


/* Quen 2]
Create a <p> tag in html, give it a class & some styling.
 Now create a new class in css and try to append this to the <p>
 element.
 Did you notice , how you overwrite the class name when you add a new one?
 Solve this problem using classList
 */

 let para = document.querySelector("p");