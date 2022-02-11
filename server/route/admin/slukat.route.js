const { request } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const slukatController = require("../../controllers/admin/slukat.content.controller")
const router = express.Router();


router.post("/testi/volounteer", (req, res) => slukatController.addVolounteerTesti(req, res));
router.post("/testi/student", (req, res) => slukatController.addStudentTesti(req, res));
router.post("/activity", (req, res) => slukatController.addActivity(req, res));

module.exports = router;