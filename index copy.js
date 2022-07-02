const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const database = require("./database/db_connection.js");

app.get("/", (req, res) => {
  res.json(`Serer is running on PORT : ${PORT}.`);
});

app.get("/database", (req, res) => {
  // SELECT
  var sql_cmd_str = "SELECT name, address FROM customers;";
  var msg = database.query_sql(sql_cmd_str);
  res.json(msg);
});

app.listen(PORT, () => {
  console.log(`Serer is running on PORT : ${PORT}.`);
});

module.exports = app;
