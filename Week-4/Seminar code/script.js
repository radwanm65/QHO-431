//------------------------------------
// Counter
//------------------------------------

let count = 0;

const counter = document.getElementById("counter");

function updateCounter() {
  counter.textContent = count;
}

document.getElementById("increase").addEventListener("click", () => {
  count++;
  updateCounter();
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  updateCounter();
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  updateCounter();
});

//------------------------------------
// Theme Switcher
//------------------------------------

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

//------------------------------------
// Live Clock
//------------------------------------

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();

//------------------------------------
// Colour Picker
//------------------------------------

document.getElementById("colourPicker").addEventListener("input", (event) => {
  document.body.style.backgroundColor = event.target.value;
});

//------------------------------------
// Form Validation
//------------------------------------

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");
  if (name === "" || email === "") {
    message.style.color = "red";
    message.textContent = "Please complete all fields.";
    return;
  }

  message.style.color = "green";
  message.textContent = `Welcome ${name}! Your email has been validated.`;
});
