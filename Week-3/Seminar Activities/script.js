// ===============================================
// Document.querySelector()
// ===============================================

const usernameInput = document.querySelector("#username");
const saveButton = document.querySelector("#saveBtn");
const clearButton = document.querySelector("#clearBtn");
const output = document.querySelector("#output");
const themeButton = document.querySelector("#themeBtn");
const colourSelect = document.querySelector("#colourSelect");

// ===============================================
// Load saved data from localStorage
// ===============================================

window.addEventListener("load", function () {
  const savedName = localStorage.getItem("username");
  const savedTheme = localStorage.getItem("theme");
  const savedColour = localStorage.getItem("backgroundColour");

  if (savedName) {
    output.textContent = "Welcome back, " + savedName + "!";
  }

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  if (savedColour) {
    document.body.style.backgroundColor = savedColour;
    colourSelect.value = savedColour;
  }
});

// ===============================================
// Save button
// Demonstrates:
// addEventListener()
// localStorage
// classList
// ===============================================

saveButton.addEventListener("click", function () {
  const name = usernameInput.value.trim();

  if (name === "") {
    output.textContent = "Please enter a name.";
    return;
  }

  localStorage.setItem("username", name);

  output.textContent = "Name saved: " + name;

  output.classList.add("success");
});

// ===============================================
// Keyboard Event
// addEventListener("keyup")
// ===============================================

usernameInput.addEventListener("keyup", function () {
  output.textContent = "Typing: " + usernameInput.value;
});

// ===============================================
// Theme Toggle
// classList.toggle()
// ===============================================

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// ===============================================
// Change Event
// addEventListener("change")
// ===============================================

colourSelect.addEventListener("change", function () {
  const colour = colourSelect.value;

  document.body.style.backgroundColor = colour;

  localStorage.setItem("backgroundColour", colour);
});

// ===============================================
// Clear Storage
// ===============================================

clearButton.addEventListener("click", function () {
  localStorage.clear();

  output.textContent = "Local storage cleared.";

  usernameInput.value = "";

  colourSelect.value = "";

  document.body.style.backgroundColor = "";

  document.body.classList.remove("dark-mode");

  output.classList.remove("success");
});
