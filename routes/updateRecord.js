const express = require("express");
const recordController = require("../controllers/records");
const verifyToken = require("../controllers/verify_token");
const router = express.Router();

router.put("/update-record", verifyToken, recordController.updateRecord);

module.exports = router;
