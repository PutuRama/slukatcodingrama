import Response from "../response/response";

// ======================================================================+
// this file purpose to validate any input request from client to server |
// ======================================================================+

module.exports ={

    inputLoginValidation : function(inputUsername , inputPassword){
        
        // If Input user name is null
        if(inputUsername  == null || inputUsername.length <= 1){
            return new Response(false, "USER_NAME_NULL", "Please add your username", null).toJson();
        }

        // If Input password is null
        if(inputPassword == null || inputPassword.length <= 1){
            return new Response(false, "PASSWORD_NULL", "Please add your password", null).toJson();
        }
    }

}