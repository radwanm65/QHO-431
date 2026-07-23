import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

import { all, get } from "./database/db.mjs";
const PORT = 3000;

const router = express.Router();

// View Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Static Files
app.use(express.static("public"));

//Routes
app.get("/", async (req, res) => {
  const shops = await all("SELECT * FROM shops");
  res.render("home", { pageTitle: "My Practice Site", shops });
});

app.get("/shop/:id", async (req, res) => {
  const shop = await get("SELECT * FROM shops WHERE id = ?", [req.params.id]);
  if (!shop) {
    return res.status(404).send("Not found");
  }
  const reviews = await all("SELECT * FROM shop_reviews WHERE shop_id = ?", [
    shop.id,
  ]);
  res.render("shop", { pageTitle: shop.name, shop, reviews });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
