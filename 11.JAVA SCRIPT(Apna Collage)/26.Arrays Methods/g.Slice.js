//Slice() method:-

/*.Extracts a part of an array or string

 .Returns a new copy

  .Does not change the original array or string*/


  let colors = ["red", "green", "blue", "yellow", "pink"];

let part = colors.slice(1, 4);
console.log(part);     // ["green", "blue", "yellow"]
console.log(colors);   // ["red", "green", "blue", "yellow", "pink"] (unchanged)



let text = "JavaScript";

let slicedText = text.slice(0, 4);
console.log(slicedText);  // "Java"
