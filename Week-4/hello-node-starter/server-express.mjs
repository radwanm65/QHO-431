// server-express.mjs
//
// A brief, deliberate sneak peek at next week. This does the SAME job
// as server-plain-node.mjs, using a tool called Express that makes
// server-building much easier. Don't worry about understanding every
// line yet - Week 5 covers Express properly. For now, just compare how
// much shorter this feels for the same result.
//
// First install Express (only needs doing once per project):
//   npm install express
//
// Then run it with:
//   node server-express.mjs
//
// Visit http://localhost:3000

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000, () => {
  console.log("Server is running. Visit http://localhost:3000");
});
