import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("FAQs", {
    title: "FAQs",
  });
});

export default router;
