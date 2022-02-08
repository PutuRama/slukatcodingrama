const { response } = require("../../response/response")
const db = require("../../db/db");

module.exports = {
    getVolounteerTesti: async function (req, res) {
        // try to get volounteer testi
        const dbConnect = db.getDb();
        dbConnect
            .collection("slukatOrId")
            .find({ "category": "TESTI-VOLOUNTEER" })
            .toArray(function (err, result) {

                if (err) {
                    console.error(err);
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }

                //check result if null
                if (result[0] == null) {
                    return res.json(response(true, "SUCCESS_GET_DATA", "User not found at all", result));
                }

                return res.json(response(true, "SUCCESS_GET_DATA", "User found!", result));
            })
    },

    addVolounteerTesti: async function (req, res) {
        var newTesti = {
            "name": req.body.name,
            "country": req.body.country,
            "category": "TESTI-VOLOUNTEER",
            "text": req.body.text,
            "createdAt": new Date()
        }
        const dbConnect = db.getDb();

        dbConnect
            .collection("slukatOrId")
            .insertOne(newTesti, function (err, result) {
                if (err) {
                    console.error(err);
                    return res.json(
                        response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null)
                    );
                }

                return res.json(response(true, "LOGGED_IN", "Your Logged In Now", newTesti))
            })

    }

}