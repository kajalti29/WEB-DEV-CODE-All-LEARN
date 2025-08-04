//Create a toggle button that changes the screen to dark-mode hen clicked & light-mode when clickeed again.
let modeBtn = document.querySelector("#mode");
let currentMode = "light";

modeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    document.body.classList.add("dark-mode");
  } else {
    currentMode = "light";
    document.body.classList.remove("dark-mode");
  }

  console.log("Current Mode:", currentMode);
});
