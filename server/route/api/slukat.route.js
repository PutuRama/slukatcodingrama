const { request } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const slukatController = require("../../controllers/admin/slukat.content.controller")
const router = express.Router();


router.get("/testi/volounteer", (req,res) => slukatController.getVolounteerTesti(req,res));

module.exports = router;