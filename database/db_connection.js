const env = require("dotenv").config().parsed;
var mysql = require("mysql");
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
function query_sql(sql_cmd_str) {
  var sql_case = sql_cmd_str.split(" ")[0].toUpperCase();
  var msg;
  db_conn.query(sql_cmd_str, (err, result) => {
    if (err) throw err;
    switch (sql_case) {
      case "SELECT":
        msg = result[0];
        console.log(msg);
        return msg;
      case "INSERT":
        msg = result.affectedRows + " record(s) inserted";
        console.log(msg);
        return msg;
      case "UPDATE":
        msg = result.affectedRows + " record(s) updated";
        console.log(msg);
        return msg;
      case "DELETE":
        msg = "Number of records deleted :  " + result.affectedRows;
        console.log(msg);
        return msg;
      case "CREATE":
        msg = sql_cmd_str.split(" ")[1].toUpperCase() + " created";
        console.log(msg);
        return msg;
      case "DROP":
        msg = "Table deleted";
        console.log(msg);
        return msg;
    }
  });
}
// // CREATE TABLE
// var sql_cmd_str =
//   "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255));";
// // INSERT
// var sql_cmd_str =
//   "INSERT INTO customers (name, address) VALUES ('Peter', 'Lowstreet 4');";
// SELECT
var sql_cmd_str = "SELECT name, address FROM customers;";
// // UPDATE
// var sql_cmd_str =
//   "UPDATE customers SET address = 'Valley 345' WHERE address = 'Lowstreet 4';";
// // DELETE
// var sql_cmd_str = "DELETE FROM customers WHERE name = 'Peter'";
// DROP TABLE
// var sql_cmd_str = "DROP TABLE customers;";
// query_sql(sql_cmd_str);
module.exports = {
  query_sql,
};
