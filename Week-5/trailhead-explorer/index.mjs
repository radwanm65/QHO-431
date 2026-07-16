// index.mjs
//
// Notice how little this file does. Its only jobs are: configure the
// view engine, serve static files, and mount the router. Every actual
// route lives in routes/pages.mjs - this is the Router pattern from
// the very start this week, rather than something added later.

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pagesRouter from "./routes/pages.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", pagesRouter);

app.listen(PORT, () => {
  console.log(`Trailhead Explorer running at http://localhost:${PORT}`);
});
