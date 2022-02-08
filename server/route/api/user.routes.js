const { request } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const userController = require("../../controllers/api/user.controller");
const router = express.Router();

router.get("/", (req,res) => userController.getAllUser(req,res));
router.get("/:userId", (req,res) => userController.getUserByUserId(req,res));
router.post("/:userId",(req,res) => userController.updateUserByUserId(req,res));

module.exports = router;