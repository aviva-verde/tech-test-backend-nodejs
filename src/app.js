import express from "express";
import { getAuthorities, getAuthority } from "./ratingController.js";

const DEFAULT_PORT = 8080;
const app = express();

function init() {
  app.use(express.static("public"));

  app.get("/", (req, res) => {
    return res.send();
  });

  app.get("/api", (req, res) => {
    return getAuthorities(req, res);
  });

  app.get("/api/:authorityId", (req, res) => {
    return getAuthority(req, res);
  });
}

async function run() {
  init();
  app.listen(DEFAULT_PORT, () => {
    console.log(`Server listening on http://localhost:${DEFAULT_PORT} ...`);
    console.log("Both the website and the app API are served on this URL");
  });
}

export { run };
