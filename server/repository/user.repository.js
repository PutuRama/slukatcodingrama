const db = require("../db/db");

const COLLECTION_USER = "user";

module.exports = {

    getAllUser: async () => {
        const dbConnect = db.getDb();
        return dbConnect
            .collection(COLLECTION_USER)
            .find()
            .toArray(function (err, result) {

                if (err) {
                    return null;
                }

                return result;
            })
    }

}