// routes/pages.mjs
//
// Every route for this small site lives here, grouped into one
// Router module and mounted once in index.mjs.

import { Router } from "express";

const router = Router();

// A small hard-coded array standing in for a database - Week 6
// introduces SQLite. Notice "note" is only present on some trails -
// this is used later to demonstrate an EJS conditional.
const trails = [
  {
    slug: "willow-creek",
    name: "Willow Creek Loop",
    difficulty: "Easy",
    distanceKm: 3.2,
    description:
      "A flat, gentle loop following the creek - a good starting trail.",
  },
  {
    slug: "ridgeline",
    name: "Ridgeline Trail",
    difficulty: "Moderate",
    distanceKm: 6.8,
    description: "A steady climb with good views from the ridge.",
    note: "Can be muddy after rain - sturdy footwear recommended.",
  },
  {
    slug: "summit-scramble",
    name: "Summit Scramble",
    difficulty: "Hard",
    distanceKm: 9.5,
    description:
      "A steep, rocky route to the summit for experienced walkers only.",
    note: "Not recommended in poor weather.",
  },
];

router.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Trailhead Explorer",
    trails,
  });
});

router.get("/faq", (req, res) => {
  res.render("faq", { pageTitle: "FAQ" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { pageTitle: "Contact Us" });
});

// One dynamic route handles every trail's detail page.
router.get("/trail/:slug", (req, res) => {
  const trail = trails.find((t) => t.slug === req.params.slug);

  if (!trail) {
    return res
      .status(404)
      .render("404", { pageTitle: "Not Found", path: req.originalUrl });
  }

  res.render("trail", { pageTitle: trail.name, trail });
});

router.use((req, res) => {
  res.render("404", { pageTitle: "Not Found", path: req.originalUrl });
});

export default router;
