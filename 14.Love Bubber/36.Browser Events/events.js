function changeText() {
  let fpara = document.getElementById('fpara');
  fpara.textContent = "Hello babbar";
}

// Wait for DOM to load
window.onload = function () {
  let fpara = document.getElementById('fpara');
  fpara.addEventListener('click', changeText);
};
