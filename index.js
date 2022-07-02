const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.json("Hello World!!!");
});

app.listen(PORT, () => {
  console.log(`Serer is running on PORT : ${PORT}.`);
});
