import Response from "../response/response";


module.exports ={

    inputLoginValidation : function(inputUsername , inputPassword){
        
        // If Input user name is null
        if(inputUsername  == null || inputUsername.length <= 1){
            return new Response(true, "USER_NAME_NULL", "Please add your username", null).toJson();
        }

        // If Input password is null
        if(inputPassword == null || inputPassword.length <= 1){
            return new Response(true, "PASSWORD_NULL", "Please add your password", null).toJson();
        }
    }

}