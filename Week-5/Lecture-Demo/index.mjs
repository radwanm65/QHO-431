import express from "express";

const app = express();
app.use("/item", express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

const items = [
  {
    slug: "example-one",
    name: "Example One",
    description: "Description of Example One",
  },

  {
    slug: "example-two",
    name: "Example Two",
    description: "Description of Example Two",
    note: "Note for Example Two",
  },
];

app.get("/", (req, res) => {
  res.render("home", { pageTitle: "My Practice Site", items });
});

app.get("/faqs", (req, res) => {
  res.render("faqs", { pageTitle: "FAQs" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { pageTitle: "Contact Us" });
});
app.get("/about", (req, res) => {
  res.render("about", { pageTitle: "About Us" });
});

app.get("/item/:slug", (req, res) => {
  const item = items.find((i) => i.slug === req.params.slug);

  if (!item) {
    return res.status(404).send("Not found");
  }

  res.render("item", { pageTitle: item.name, item });
});

app.listen(3000, () => console.log("SERVER IS Running on port 3000"));
