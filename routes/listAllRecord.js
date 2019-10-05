const express = require("express");
const recordController = require("../controllers/records");
const verifyToken = require("../controllers/verify_token");
const router = express.Router();

router.get("/list-records", verifyToken, recordController.listAllRecords);

module.exports = router;
