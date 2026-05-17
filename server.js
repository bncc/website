const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.get("/healthz", (_req, res) => res.type("text").send("ok"));

app.use(express.static(__dirname, { extensions: ["html"] }));

app.listen(port, () => {
  console.log(`listening on :${port}`);
});
