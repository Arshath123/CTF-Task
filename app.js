const express = require("express");
const bodyParser = require("body-parser");
const addRecord = require("./routes/addRecord");
const deleteRecord = require("./routes/deleteRecord");
const updateRecord = require("./routes/updateRecord");
const findRecord = require("./routes/findRecord");
const listRecord = require("./routes/listAllRecord");
const login = require("./routes/login");

const app = express();

app.use(bodyParser.json());

app.use("/add", addRecord);
app.use("/delete", deleteRecord);
app.use("/update", updateRecord);
app.use("/find", findRecord);
app.use("/list", listRecord);

app.post("/login", login);

app.listen(8000, () => {
  console.log("Server is Connected");
});
