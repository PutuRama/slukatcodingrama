const { request } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const slukatController = require("../../controllers/api/slukat.content.controller")
const router = express.Router();


router.get("/testi/volounteer", (req, res) => slukatController.getVolounteerTesti(req, res));
router.get("/testi/student", (req, res) => slukatController.getStudentTesti(req, res));
router.get("/activity", (req, res) => slukatController.getActivities(req, res));

module.exports = router;