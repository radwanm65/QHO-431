import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("contact", {
    cssFile: "contact.css",
    title: "Contact",
    email: "info@example.com",
    phone: "01234 567890",
  });
});

export default router;
