const line = require("@line/bot-sdk");
// const axios = require("axios");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const env = require("dotenv").config().parsed;
var mysql = require("mysql");

app.use(express.json());
// MySQL Connection
var db_conn = mysql.createConnection({
  host: env.db_host,
  user: env.db_user,
  password: env.db_password,
  port: env.db_port,
  database: env.db_database,
});
db_conn.connect((err) => {
  if (err) throw err;
  console.log(
    "Database is running on HOST : Amazon Relational Database Service."
  );
});

// const lineConfig = {
//   channelAccessToken: env.CHANNEL_ACCESS_TOKEN,
//   channelSecret: env.CHANNEL_SECRET,
// };

// // create LINE SDK client
// const client = new line.Client(lineConfig);

app.get("/", (req, res) => {
  res.json(`Serer is running on PORT : ${PORT}.`);
});

// app.post("/webhook", line.middleware(lineConfig), (req, res) => {
//   try {
//     const events = req.body.events;
//     console.log("events ====>", events);
//     return events.length > 0
//       ? events.map((item) => handleEvent(item))
//       : res.status(200).send("OK");
//   } catch (err) {
//     res.status(500).end();
//   }
// });

// // event handler
// const handleEvent = async (event) => {
//   console.log(event);
//   return client.replyMessage(event.replyToken, { type: "text", text: "Test" });
// };

// // Insert Into
// app.post("/insert", async (req, res) => {
//   const { name, address } = req.body;
//   try {
//     db_conn.query(
//       "INSERT INTO vercel_aws.customers (name, address) VALUES(?, ?);",
//       [name, address],
//       (err, results, fields) => {
//         if (err) {
//           console.log("err while inserting row into the database : ", err);
//           return res.status(400).send();
//         }
//         return res
//           .status(201)
//           .json({ massage: results.affectedRows + " record(s) inserted" });
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send();
//   }
// });

// // SELECT
// app.get("/select", async (req, res) => {
//   try {
//     db_conn.query(
//       "SELECT name, address FROM vercel_aws.customers;",
//       (err, results, fields) => {
//         if (err) {
//           console.log(err);
//           return res.status(400).send();
//         }
//         return res.status(200).json(results);
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send();
//   }
// });

// // WHERE
// app.get("/select/where/:address", async (req, res) => {
//   const address = req.params.address;
//   try {
//     db_conn.query(
//       "SELECT name, address FROM vercel_aws.customers WHERE address = ?;",
//       [address],
//       (err, results, fields) => {
//         if (err) {
//           console.log(err);
//           return res.status(400).send();
//         }
//         return res.status(200).json(results);
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send();
//   }
// });

// // UPDATE
// app.patch("/update/:name", async (req, res) => {
//   const name = req.params.name;
//   const new_address = req.body.new_address;
//   try {
//     db_conn.query(
//       "UPDATE vercel_aws.customers SET address = ? WHERE name = ?;",
//       [new_address, name],
//       (err, results, fields) => {
//         if (err) {
//           console.log(err);
//           return res.status(400).send();
//         }
//         return res
//           .status(200)
//           .json({ massage: results.affectedRows + " record(s) updated" });
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send();
//   }
// });

// // DELETE
// app.delete("/delete/:name", async (req, res) => {
//   const name = req.params.name;
//   try {
//     db_conn.query(
//       "DELETE FROM vercel_aws.customers WHERE name = ?;",
//       [name],
//       (err, results, fields) => {
//         if (err) {
//           console.log(err);
//           return res.status(400).send();
//         }
//         if (results.affectedRows === 0) {
//           return res.status(404).json({ massage: "Empty record(s)" });
//         }
//         return res.status(200).json({
//           massage: "Number of records deleted:" + results.affectedRows,
//         });
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send();
//   }
// });

app.listen(PORT, () => {
  console.log(`Serer is running on PORT : ${PORT}.`);
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
