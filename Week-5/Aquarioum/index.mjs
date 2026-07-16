import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import indexRouter from "./routes/index.js";
import aboutRouter from "./routes/about.js";
import contactRouter from "./routes/contact.js";
import faqRouter from "./routes/faqs.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/faqs", faqRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
