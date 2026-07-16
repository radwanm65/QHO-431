// routes/pages.mjs
//
// Every route for this small site lives here, grouped into one
// Router module and mounted once in index.mjs.

import { Router } from "express";

const router = Router();

const aquarioum = {
  name: "Willow Creek Aquarioum",
  location: "United Kingdom",
  address: "12 Millinium Road, Birmingham",
  description: "Aquarioum Description.",
  email: "info@aquarioum.com",
};

router.get("/", (req, res) => {
  res.render("home", { pageTitle: "Home Page", aquarioum });
});

router.get("/faqs", (req, res) => {
  res.render("faqs", { pageTitle: "FAQ Page" });
});

router.get("/about", (req, res) => {
  res.render("about", { pageTitle: "About Us Page" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { pageTitle: "Contact Us Page" });
});

router.use((req, res) => {
  res.render("404", { pageTitle: "Not Found", path: req.originalUrl });
});

export default router;
