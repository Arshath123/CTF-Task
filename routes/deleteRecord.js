const express = require("express");
const recordController = require("../controllers/records");

const verifyToken = require("../controllers/verify_token");
const router = express.Router();

router.delete("/delete-record", verifyToken, recordController.deleteRecord);

module.exports = router;
