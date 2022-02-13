const db = require("../../db/db");
const { response } = require("../../response/response")

module.exports = {

    // to get all user
    getAllUser: async function (req, res) {
        const dbConnect = db.getDb();
        dbConnect
            .collection("user")
            .find()
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

    // to get user data by userId 
    getUserByUserId: async function (req, res) {
        const dbConnect = db.getDb();
        dbConnect
            .collection("user")
            .find({ userId: req.params.userId })
            .toArray(function (err, result) {

                if (err) {
                    console.error(err);
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }

                //check result if null
                if (result[0] == null) {
                    return res.json(response(true, "SUCCESS_GET_DATA", "User not found at all", result[0]));
                }

                return res.json(response(true, "SUCCESS_GET_DATA", "User found!", result[0]));
            })
    },

    // to update/edit user data
    updateUserByUserId: async function (req, res) {
        const dbConnect = db.getDb();
        const filter = { userId: req.params.userId };
        const update = {
            $set: {
                userName: req.body.userName,
                email: req.body.email
            }
        };
        dbConnect
            .collection("user")
            .findOneAndUpdate(filter, update)
            .then(function (result) {
                if (!result.ok) {
                    return res.json(response(false, "FAILED_UPDATE_DATA", "Failed to update data user", null));
                }
                console.info(result);
                return res.json(response(true, "SUCCESS_UPDATE_DATA", "Success to update data user", null));
            })
    }

}