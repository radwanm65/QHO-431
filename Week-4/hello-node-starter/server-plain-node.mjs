// server-plain-node.mjs
//
// Your first server. No Express yet - this uses only what comes built
// into Node.js itself, so you can see exactly what a "server" is at
// its simplest: something that stays running and responds when asked.
//
// Run it with:
//   node server-plain-node.mjs
//
// Then open a browser and visit http://localhost:5000

import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello from my first server!</h1>");
});

const PORT = 3000;

server.listen(PORT, () => {
  // This line only runs once, when the server starts.
  console.log(`Server is running. Visit http://localhost:${PORT}`);
});

// Notice the terminal does NOT return to a normal prompt after this
// runs - the server keeps running until you stop it with Ctrl+C.
// This is different from hello.js, which ran once and finished.
