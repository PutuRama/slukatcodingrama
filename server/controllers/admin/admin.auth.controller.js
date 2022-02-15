const { response } = require("../../response/response")
const { generateToken, generateUserId } = require("../../util/generator.util")
const { inputLoginValidation, inputSignUpValidation, inputLogOut } = require("../../util/validator.util")
const Auth = require("../../model/auth.model")
const db = require("../../db/db");
const passwordHash = require("password-hash");
const AdminUser = require("../../model/admin.user");

module.exports = {
    signup: async function (req, res) {

        //validation the input
        var resultValidator = inputSignUpValidation(req.body.username, req.body.password, req.body.email);

        // check the input signup
        if (!resultValidator.ok) {
            return res.json(resultValidator);
        }

        // encrypt of hash the password for sercurity
        hashedPassword = passwordHash.generate(req.body.password);

        // new data user that will be insert to db
        const newUser = AdminUser(generateUserId(), req.body.username, hashedPassword, req.body.email);

        // try to adding the new data to db
        const dbConnect = db.getDb();
        dbConnect
            .collection("admin")
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

        //validtion the input
        var resultValidator = inputLoginValidation(req.body.username, req.body.password);

        if (!resultValidator.ok) {
            //if input login is not valid ,  return the result validator
            return res.json(resultValidator);
        }

        const dbConnect = db.getDb();

        // find user by username
        dbConnect
            .collection("admin")
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
                const newToken = Auth(result[0].userId, generateToken(), new Date());

                // add new doc authToken
                dbConnect.collection("adminAuth").insertOne(newToken, function (err, result) {
                    if (err) {
                        console.error(err);
                        return res.json(
                            response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null)
                        );
                    }
                    res
                    return res.cookie('authToken', newToken).json(response(true, "LOGGED_IN", "Your Logged In Now", newToken))
                })

            })
    },
    logOut: async function (req, res) {
        // validation the input
        var resultValidator = inputLogOut(req.body.token);

        // if input not valid
        if (!resultValidator.ok) {
            return res.json(resultValidator);
        }

        // remove token
        const dbConnect = db.getDb();
        dbConnect
            .collection("adminAuth")
            .deleteOne({ token: req.body.token })
            .then(function (result) {
                return res.json(response(true, "LOGGED_OUT", "Your Logged Out Now", null))
            })
    },
    checkAuth : async function(req,res){
        const dbConnect = db.getDb();
        console.log(req.cookies);
        // find user by username
        dbConnect
            .collection("admin")
            .find({ token: req.cookies.token })
            .toArray(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.json(response(false, "INTERNAL_SERVER_ERROR", "Internal Server Error", null));
                }
                //check result , if there is no user found , return error
                if (result[0] == null) {
                    return res.json(response(false, "NOT_AUTHENTICATED", "You are not authenticated", null));
                }

                return res.json(response(true, "AUTHENTICATED", "You are authenticated", req.cookies));

            })

    }
}