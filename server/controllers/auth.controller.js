
const { response } = require("../response/response")
const { generateToken, generateUserId } = require("../util/generator.util")
const { inputLoginValidation, inputSignUpValidation } = require("../util/validator.util")
const db = require("../db/db");
const passwordHash = require("password-hash");

module.exports = {
    signup: async function (req, res) {

        var resultValidator = inputSignUpValidation(req.body.username, req.body.password, req.body.email);

        if (!resultValidator.ok) {
            return res.json(resultValidator);
        }

        hashedPassword = passwordHash.generate(req.body.password);

        const newUser = {
            userId: generateUserId(),
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        }

        const dbConnect = db.getDb();

        dbConnect
            .collection("user")
            .insertOne(newUser, function (err, result) {
                if (err) {
                    return res.json(
                        response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null)
                    );
                }

                return res.json(
                    response(true, "SUCCESS_TO_SIGNUP", "Success to Signup New User", newUser)
                );
            });

    },
    login: async function (req, res) {


        var resultValidator = inputLoginValidation(req.body.username, req.body.password);

        if (!resultValidator.ok) {
            return res.json(resultValidator);
        }

        const dbConnect = db.getDb();

        dbConnect
            .collection("user")
            .find({ username: req.body.username })
            .toArray(function (err, result) {

                if (err) {
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }

                if (!passwordHash.verify(req.body.password, result[0].password)) {
                    return res.json(response(false, "WRONG_PASSWORD", "Your Password is Wrong", null))
                }

                const newToken = {
                    userId: result[0].userId,
                    token: generateToken(20)
                }


                dbConnect.collection("authToken").insertOne(newToken, function (err, result) {
                    if (err) {
                        return res.json(
                            response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null)
                        );
                    }

                    return res.json(response(true, "LOGGED_IN", "Your Logged In Now", newToken))
                })

            })
    }
}