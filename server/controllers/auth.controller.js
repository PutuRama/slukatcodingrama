
const { response } = require("../response/response")
const { generateToken, generateUserId } = require("../util/generator.util")
const { inputLoginValidation, inputSignUpValidation, inputLogOut } = require("../util/validator.util")
const db = require("../db/db");
const passwordHash = require("password-hash");

module.exports = {
    signup: async function (req, res) {

        var resultValidator = inputSignUpValidation(req.body.username, req.body.password, req.body.email);

        // check the input signup
        if (!resultValidator.ok) {
            return res.json(resultValidator);
        }

        // encrypt of hash the password for sercurity
        hashedPassword = passwordHash.generate(req.body.password);

        // new data user that will be insert to db
        const newUser = {
            userId: generateUserId(),
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        }

        const dbConnect = db.getDb();

        // try to adding the new data to db
        dbConnect
            .collection("user")
            .insertOne(newUser, function (err, result) {
                if (err) {
                    console.error(err);
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
            //if input login is not valid ,  return the result validator
            return res.json(resultValidator);
        }

        const dbConnect = db.getDb();

        // find user by username
        dbConnect
            .collection("user")
            .find({ username: req.body.username })
            .toArray(function (err, result) {

                if (err) {
                    console.error(err);
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }

                //check result , if there is no user found , return error
                if (result[0] == null) {
                    return res.json(response(false, "USER_NOT_FOUND", "Username not found", null));
                }

                //check password , if ther are not same, return reponse error
                if (!passwordHash.verify(req.body.password, result[0].password)) {
                    return res.json(response(false, "WRONG_PASSWORD", "Your Password is Wrong", null))
                }

                // the new data authToken that will be insert to db 
                const newToken = {
                    userId: result[0].userId,
                    token: generateToken(20)
                }

                // add new doc authToken
                dbConnect.collection("authToken").insertOne(newToken, function (err, result) {
                    if (err) {
                        console.error(err);
                        return res.json(
                            response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null)
                        );
                    }

                    return res.json(response(true, "LOGGED_IN", "Your Logged In Now", newToken))
                })

            })
    },
    logOut: async function (req, res) {

        var resultValidator = inputLogOut(req.body.token);
        if (!resultValidator.ok) {
            return res.json(resultValidator);
        }

        const dbConnect = db.getDb();
        dbConnect
            .collection("authToken")
            .deleteOne({ token: req.body.token })
            .then(function (result) {
                return res.json(response(true, "LOGGED_OUT", "Your Logged Out Now", null))
            })
    }
}