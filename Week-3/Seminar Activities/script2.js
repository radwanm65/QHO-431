// ----------------------------
// Intersection Observer
// ----------------------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      document.getElementById("intersectionResult").textContent =
        "Element is visible.";
    }
  });
});

observer.observe(document.getElementById("observeBox"));

// ----------------------------
// Mutation Observer
// ----------------------------

const target = document.getElementById("mutationBox");

const mutationObserver = new MutationObserver(function () {
  document.getElementById("mutationResult").textContent = "DOM Changed";
});

mutationObserver.observe(target, {
  childList: true,
});

document.getElementById("changeText").onclick = function () {
  target.textContent = "Updated Text";
};

// ----------------------------
// Drag and Drop
// ----------------------------

const drag = document.getElementById("dragItem");

const drop = document.getElementById("dropZone");

drag.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", "Dragged");
});

drop.addEventListener("dragover", (e) => {
  e.preventDefault();
});

drop.addEventListener("drop", (e) => {
  e.preventDefault();

  drop.innerHTML = "Item Dropped";
});

// ----------------------------
// Geolocation
// ----------------------------

document.getElementById("locationButton").onclick = function () {
  navigator.geolocation.getCurrentPosition((position) => {
    document.getElementById("locationResult").textContent = `Latitude:
${position.coords.latitude}

Longitude:
${position.coords.longitude}`;
  });
};

// ----------------------------
// Web Component
// ----------------------------

class StudentCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `

<style>

div{

border:2px solid blue;

padding:20px;

}

</style>

<div>

<h3>Student Name</h3>

<p>Computer Science</p>

</div>

`;
  }
}

customElements.define("student-card", StudentCard);

// ----------------------------
// Canvas API
// ----------------------------

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";

ctx.fillRect(40, 40, 120, 100);

ctx.beginPath();

ctx.arc(260, 90, 45, 0, 2 * Math.PI);

ctx.fillStyle = "green";

ctx.fill();

ctx.font = "20px Arial";

ctx.fillStyle = "blue";

ctx.fillText("Canvas API", 120, 180);

// ----------------------------
// Web Worker
// ----------------------------

const worker = new Worker("worker.js");

document.getElementById("workerButton").onclick = function () {
  worker.postMessage("start");
};

worker.onmessage = function (e) {
  document.getElementById("workerResult").textContent = e.data;
};

// ----------------------------
// Service Worker
// ----------------------------

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")

    .then(() => {
      document.getElementById("swStatus").textContent =
        "Service Worker Registered";
    });
}
