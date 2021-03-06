const { response } = require("../../response/response")
const db = require("../../db/db");

module.exports = {
    getVolounteerTesti: async function (req, res) {
        // try to get volounteer testi
        const dbConnect = db.getDb();
        dbConnect
            .collection("volounteer")
            .find({ "category": "TESTI-VOLOUNTEER" })
            .toArray(function (err, result) {

                if (err) {
                    console.error(err);
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }

                //check result if null
                if (result[0] == null) {
                    return res.json(response(true, "SUCCESS_GET_DATA", "Data Is Empty", result));
                }

                return res.json(response(true, "SUCCESS_GET_DATA", "Success Get Data From Database", result));
            })
    },
    getVolounteerTestiById: async function (req, res) {
        // try to get volounteer testi
        const dbConnect = db.getDb();
        dbConnect
            .collection("volounteer")
            .find({ "id": req.params.id })
            .toArray(function (err, result) {

                if (err) {
                    console.error(err);
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }

                //check result if null
                if (result[0] == null) {
                    return res.json(response(true, "SUCCESS_GET_DATA", "Data Is Empty", result));
                }

                return res.json(response(true, "SUCCESS_GET_DATA", "Success Get Data From Database", result[0]));
            })
    },
    getStudentTesti: async function (req, res) {
        // try to get volounteer testi
        const dbConnect = db.getDb();
        dbConnect
            .collection("student")
            .find({ "category": "TESTI-STUDENT" })
            .toArray(function (err, result) {

                if (err) {
                    console.error(err);
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }

                //check result if null
                if (result[0] == null) {
                    return res.json(response(true, "SUCCESS_GET_DATA", "Data is Empty", result));
                }

                return res.json(response(true, "SUCCESS_GET_DATA", "Success Get Data From Database", result));
            })
    },
    getStudentTestiById: async function (req, res) {
        // try to get volounteer testi
        const dbConnect = db.getDb();
        dbConnect
            .collection("student")
            .find({ "id": req.params.id })
            .toArray(function (err, result) {

                if (err) {
                    console.error(err);
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }

                //check result if null
                if (result[0] == null) {
                    return res.json(response(true, "SUCCESS_GET_DATA", "Data is Empty", result));
                }

                return res.json(response(true, "SUCCESS_GET_DATA", "Success Get Data From Database", result[0]));
            })
    },
    getActivities: async function (req, res) {
        const dbConnect = db.getDb();
        dbConnect
            .collection("activities")
            .find()
            .toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }
                //check result if null
                if (result[0] == null) {
                    return res.json(response(true, "SUCCESS_GET_DATA", "Data is Empty", result));
                }
                return res.json(response(true, "SUCCESS_GET_DATA", "Success Get Data From Database", result));
            })
    },
    getActivityById: async function (req, res) {
        const dbConnect = db.getDb();
        dbConnect
            .collection("activities")
            .find({ "id": req.params.id })
            .toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }
                //check result if null
                if (result[0] == null) {
                    return res.json(response(true, "SUCCESS_GET_DATA", "Data is Empty", result));
                }
                return res.json(response(true, "SUCCESS_GET_DATA", "Success Get Data From Database", result[0]));
            })
    }
}