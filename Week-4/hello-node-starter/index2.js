// index2.js
const button = document.getElementById("btn");
button.addEventListener("click", function () {
  const title = document.getElementById("title");
  title.textContent = "Updated using external JavaScript file";

  const paragraph = document.querySelector(".description");
  paragraph.textContent = "Color changed using querySelector";
  paragraph.style.color = "red";
});
