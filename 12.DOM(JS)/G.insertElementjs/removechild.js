function removePara() {
  const container = document.getElementById("container");
  const parah = document.getElementById("parah");

  if (parah) {
    container.removeChild(parah);  // ✅ removes the paragraph
  } else {
    alert("Paragraph already removed!");
  }
}
