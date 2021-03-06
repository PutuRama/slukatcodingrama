const { response } = require("../response/response")
const { API_KEY } = require('../config/api.key.config');
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
    },

    inputLogOut: function (inputToken) {
        // check token is not null
        if (inputToken == null) {
            return response(false, "TOKEN_NULL", "Your token is empty", null);
        }

        return response(true, "VALID_INPUT", "valid input", null);

    },

    inputAddVolounteerTesi: function (name, country, text) {
        if (name == null || country == null || text == null) {
            return response(false, "NULL_FIELD", "All Field not allowed to be empty", null);
        }
        return response(true, "VALID", "valid input", null);
    },

    inputAddActivity: function (title, desc) {
        if (title == null || desc == null) {
            return response(false, "NULL_FIELD", "All Field not allowed to be empty", null);
        }
        return response(true, "VALID", "valid input", null);
    },

    inputAddStudent: function (name, address, text) {
        if (name == null || address == null || text == null) {
            return response(false, "NULL_FIELD", "All Field not allowed to be empty", null);
        }
        return response(true, "VALID", "valid input", null);
    },

    keyValidation: function (key) {
        return API_KEY == key;
    }

}