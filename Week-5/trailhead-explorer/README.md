# Trailhead Explorer — QHO431 Week 5 Teaching Example

A small walking-trails site demonstrating EJS templating and Express
routing together, exactly as taught in Week 5.

## What this demonstrates

| Feature | Where to look |
|---|---|
| Express.Router() used from the start | `routes/pages.mjs`, mounted in `index.mjs` |
| A dynamic route (`/trail/:slug`) handling every trail with one route | `routes/pages.mjs` |
| EJS output (`<%= %>`) | throughout the views |
| EJS loops | `views/home.ejs` |
| EJS conditionals controlling both content AND a CSS class | `views/home.ejs` (difficulty badge) |
| EJS conditionals for an optional field | `views/trail.ejs` (the note box only appears on some trails) |
| Shared partials | `views/partials/header.ejs`, `views/partials/footer.ejs` |
| A custom 404 page | `views/404.ejs`, used in `routes/pages.mjs` |

## Running it

```
npm install
node index.mjs
```

Visit http://localhost:5000

Try visiting `/trail/ridgeline` (has a note) versus `/trail/willow-creek`
(doesn't) to see the conditional note box in action, and `/trail/anything`
to see the 404 page.

## What's deliberately not here yet

No database (Week 6), no forms with real submission handling (Week 7), no
AJAX (Week 10). The contact page is a placeholder on purpose.
