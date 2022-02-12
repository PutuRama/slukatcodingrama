const { response } = require("../../response/response")
const db = require("../../db/db");
const { generateItemId } = require("../../util/generator.util")
const { inputAddVolounteerTesi, inputAddActivity, inputAddStudent } = require('../../util/validator.util')

module.exports = {

    addVolounteerTesti: async function (req, res) {
        var validInput = inputAddVolounteerTesi(req.body.name, req.body.country, req.body.text)
        if (!validInput) {
            response(false, "INVALID_INPUT", "Please Check Your Input", null)
        }

        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;

        var newVolounteer = {
            "name": req.body.name,
            "country": req.body.country,
            "category": "TESTI-VOLOUNTEER",
            "text": req.body.text,
            "createdAt": new Date(),
            "id": "TESTI-" + generateItemId(),
            "imgUrl": filePath
        }

        const dbConnect = db.getDb();
        dbConnect
            .collection("volounteer")
            .insertOne(newVolounteer, function (err, result) {
                if (err) {
                    console.error(err);
                    return res.json(
                        response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null)
                    );
                }

                return res.json(response(true, "SUCCESS_ADD_DATA", "Succes to add data to database ", newVolounteer))
            })

    },
    addStudentTesti: async function (req, res) {
        var validInput = inputAddStudent(req.body.name, req.body.address, req.body.text)
        if (!validInput) {
            response(false, "INVALID_INPUT", "Please Check Your Input", null)
        }


        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;

        var newStudent = {
            "name": req.body.name,
            "address": req.body.address,
            "category": "TESTI-STUDENT",
            "text": req.body.text,
            "createdAt": new Date(),
            "id": "TESTI-" + generateItemId(),
            "imgUrl": filePath
        }

        const dbConnect = db.getDb();
        dbConnect
            .collection("student")
            .insertOne(newStudent, function (err, result) {
                if (err) {
                    console.error(err);
                    return res.json(
                        response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null)
                    );
                }

                return res.json(response(true, "SUCCESS_ADD_DATA", "Succes to add data to database ", newStudent))
            })

    },
    addActivity: async function (req, res) {
        var validInput = inputAddActivity(req.body.title, req.body.description)
        if (!validInput) {
            response(false, "INVALID_INPUT", "Please Check Your Input", null)
        }
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;

        var newActivity = {
            "title": req.body.title,
            "description": req.body.description,
            "createdAt": new Date(),
            "id": "ACTIVITY-" + generateItemId(),
            "imgUrl": filePath
        }

        const dbConnect = db.getDb();
        dbConnect
            .collection("activities")
            .insertOne(newActivity, function (err, result) {
                if (err) {
                    console.error(err);
                    return res.json(
                        response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null)
                    );
                }

                return res.json(response(true, "SUCCESS_ADD_DATA", "Succes to add data to database ", newActivity))
            })
    },


}