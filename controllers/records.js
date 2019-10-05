const db = require("../model/db");
const jwt = require("jsonwebtoken");

exports.addRecord = (req, res, next) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const id = req.body.id;
      const name = req.body.name;
      const value = req.body.createdAt;

      db.query("INSERT INTO records (id,name,createdAt) values(?,?,?)", [
        id,
        name,
        value
      ]);

      res.status(200).json({
        method: "POST",
        result: "Successfully added to DataBase",
        authData
      });
    }
  });
};

exports.deleteRecord = (req, res, next) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const id = req.body.id;

      db.query("DELETE FROM records WHERE id = ?", [id], (error, results) => {
        if (results.affectedRows !== 0) {
          res.status(200).json({
            method: "DELETE",
            result: "Successfully Deleted From DataBase",
            authData
          });
        } else {
          res.status(200).json({
            method: "DELETE",
            result: "Resource Not Found"
          });
        }
      });
    }
  });
};

exports.findRecord = (req, res, next) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const id = req.body.id;

      db.query("select * from records where id = ?", [id], (error, results) => {
        if (results.length > 0) {
          res.status(200).json({
            method: "GET",
            result: "Success",
            records: results,
            authData
          });
        } else {
          res.status(200).json({
            method: "GET",
            result: "Resource Not Found"
          });
        }
      });
    }
  });
};

exports.updateRecord = (req, res, next) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const id = req.body.id;
      const name = req.body.name;
      const value = req.body.createdAt;
      if (id) {
        if (name) {
          db.query(
            "update records set name = ? where id = ?",
            [name, id],
            (err, result) => {}
          );
        }
        if (value) {
          db.query(
            "update records set createdAt = ? where id = ?",
            [value, id],
            (err, result) => {}
          );
        }
      }
      db.query("SELECT * FROM records", (err, results, fields) => {
        res.status(200).json({
          method: "PUT",
          result: "Successfully Updated to DataBase",
          records: results,
          authData
        });
      });
    }
  });
};

exports.listAllRecords = (req, res, next) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      db.query("SELECT * FROM records", (err, results, fields) => {
        if (results.length > 0) {
          res.status(200).json({
            method: "GET",
            result: "Success",
            records: results,
            authData
          });
        } else {
          res.status(200).json({
            method: "GET",
            result: "No data available"
          });
        }
      });
    }
  });
};
