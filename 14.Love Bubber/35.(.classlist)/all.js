let box = document.getElementById("myBox");

// Add a class
box.classList.add("active");

// Remove a class
box.classList.remove("red");

// Toggle a class
box.classList.toggle("hidden");

// Check if class exists
console.log(box.classList.contains("box")); // true

// Replace class
box.classList.replace("box", "container");
