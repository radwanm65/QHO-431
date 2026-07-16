import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const aquarioum = {
    name: "The Aquarioum",
    address: "123 Marine Street",
    email: "info@aquarioum.com",
  };

  const modules = ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS"];

  res.render("index", {
    title: "The Aquarioum Home",
    aquarioum,
    modules,
  });
});

export default router;
