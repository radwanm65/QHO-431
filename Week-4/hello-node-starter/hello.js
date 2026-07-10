// hello.js
//
// This file has NO server, NO Express, nothing web-related at all.
// Its only purpose is to prove Node.js can run plain JavaScript
// outside a browser. Run it with:
//
//   node hello.js
//
// Compare this to running JavaScript in a browser console - the code
// itself is identical, but nothing here needed a browser tab open.
let name = "Marwan";
const birthplace = "Gaza Palestine";
console.log(`Hello, my name is ${name} and I was born in ${birthplace}.`);
console.log("Hello from Node.js!");
console.log("Node is just JavaScript, running outside the browser.");

const node = "Node.js";
const year = 2009;
console.log(`${node} was first released in ${year}.`);

// Node can also do things a browser normally can't, like reading
// information about the computer it's running on:
console.log("Node version installed:", process.version);

let age = 20;
if (age < 14) {
  console.log("You are a child. Child Ticket Issued.");
} else if (age < 65) {
  console.log("You are an adult. Adult Ticket Issued.");
} else {
  console.log("Travel Free.");
}
