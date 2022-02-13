const { request } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const authController = require("../../controllers/api/auth.controller")
const router = express.Router();

router.post("/login", (req,res) => authController.login(req,res));
router.post("/signup", (req,res) => authController.signup(req,res));
router.post("/logout", (req,res) => authController.logOut(req,res));

module.exports = router;