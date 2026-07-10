# Hello Node — QHO431 Week 4

The smallest possible starting point. No Express routing, no EJS, no
database - those come in later weeks. This week is about understanding
Node.js itself and running your first server.

## Files, in the order you'll use them

| File | What it shows |
|---|---|
| `hello.js` | Node running plain JavaScript, with no server at all |
| `server-plain-node.mjs` | Your first server, using only what's built into Node |
| `server-express.mjs` | A one-line-shorter preview of Express - properly covered next week |

## Running each file

```
node hello.js
```

```
node server-plain-node.mjs
```
Visit http://localhost:5000, then press Ctrl+C in the terminal to stop it.

```
npm install
node server-express.mjs
```
Visit http://localhost:5000, then press Ctrl+C to stop it.

## If something goes wrong

- **"node is not recognized" / "command not found"** — Node.js isn't installed correctly, or your terminal needs restarting after installation. See the Week 4 lecture guide's installation troubleshooting section.
- **"Cannot find module 'express'"** — you need to run `npm install` inside this folder first.
- **"Port already in use"** — you likely still have a previous server running in another terminal window. Find it and stop it with Ctrl+C before starting a new one.
