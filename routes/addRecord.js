const express = require("express");
const recordController = require("../controllers/records");
const verifyToken = require("../controllers/verify_token");
const router = express.Router();

router.post("/add-record", verifyToken, recordController.addRecord);

module.exports = router;
