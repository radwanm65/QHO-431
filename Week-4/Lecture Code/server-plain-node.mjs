import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end("<h1>Hello from my first server!</h1>");
});

server.listen(3000, () => {
  console.log("Server is running. Visit http://localhost:3000");
});
