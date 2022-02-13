const { request } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const slukatController = require("../../controllers/api/slukat.content.controller")
const router = express.Router();


router.get("/testi/volounteer", (req, res) => slukatController.getVolounteerTesti(req, res));
router.get("/testi/volounteer/:id", (req, res) => slukatController.getVolounteerTestiById(req, res));
router.get("/testi/student", (req, res) => slukatController.getStudentTesti(req, res));
router.get("/testi/student/:id", (req, res) => slukatController.getStudentTestiById(req, res));
router.get("/activity", (req, res) => slukatController.getActivities(req, res));
router.get("/activity/:id", (req, res) => slukatController.getActivityById(req, res));

module.exports = router;