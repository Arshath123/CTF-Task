const express = require("express");
const recordController = require("../controllers/records");
const verifyToken = require("../controllers/verify_token");
const router = express.Router();

router.get("/find-record", verifyToken, recordController.findRecord);

module.exports = router;
