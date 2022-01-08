const { response } = require("../response/response")
// ======================================================================+
// this file purpose to validate any input request from client to server |
// ======================================================================+

module.exports = {

    inputLoginValidation: function (inputUsername, inputPassword) {

        // If Input user name is null
        if (inputUsername == null || inputUsername.length <= 1) {
            return response(false, "USER_NAME_NULL", "Please add your username", null);
        }

        // If Input password is null
        if (inputPassword == null || inputPassword.length <= 1) {
            return response(false, "PASSWORD_NULL", "Please add your password", null);
        }

        return response(true, "VALID_INPUT", "valid Input", null);
    },
    inputSignUpValidation: function (inputUsername, inputPassword, inputEmail) {

        // If Input user name is null
        if (inputUsername == null || inputUsername.length <= 1) {
            return response(false, "USER_NAME_NULL", "Please add your username", null);
        }

        // If Input password is null
        if (inputPassword == null) {
            return response(false, "PASSWORD_NULL", "Please add your password", null);
        }

        //if Input password less then 8
        if (inputPassword.length <= 8) {
            return response(false, "PASSWORD_LESS", "Your Password must be greater then 8 character", null);
        }

        // if Input email is null
        if (inputEmail == null) {
            return response(false, "EMAIL_NULL", "Please add your Email", null);
        }

        // if Input email Not Valid
        if (!inputEmail.includes("@") || !inputEmail.includes(".")) {
            return response(false, "EMAIL_INVALID", "Your Email invalid , please check your input email", null);
        }

        return response(true, "VALID_INPUT", "valid Input", null);
    }

}