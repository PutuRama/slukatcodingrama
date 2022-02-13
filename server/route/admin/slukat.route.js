const { request } = require("express");
const express = require("express");
const { route } = require("express/lib/application");
const slukatController = require("../../controllers/admin/slukat.content.controller")
const router = express.Router();
const multer = require("multer");

let storageActivities = multer.diskStorage({
    destination: "asset/activities",
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.originalname + '-' + Date.now() + '.' + extension)
    }
})

let storageVolounteer = multer.diskStorage({
    destination: "asset/volounteer",
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
    }
})

let storageStudent = multer.diskStorage({
    destination: "asset/student",
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension)
    }
})

let uploadActivity = multer({ storage: storageActivities })
let uploadVolounteer = multer({ storage: storageVolounteer })
let uploadStudent = multer({ storage: storageStudent })


router.post("/testi/volounteer", uploadVolounteer.single("image"), (req, res) => slukatController.addVolounteerTesti(req, res));
router.post("/testi/student", uploadStudent.single("image"), (req, res) => slukatController.addStudentTesti(req, res));
router.post("/activity", uploadActivity.single("image"), (req, res) => slukatController.addActivity(req, res));
router.post("/activity/:id", uploadActivity.single("image"), (req, res) => slukatController.deleteActivity(req, res));

module.exports = router;