const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12307193",
  password: "CnitGdRmNf",
  database: "sql12307193",
  port: "3306"
});

db.connect(err => {
  if (!err) {
    console.log("Database is Connected");
  } else {
    console.log("Database is not connected");
  }
});

module.exports = db;
