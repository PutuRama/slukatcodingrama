// ==============================================================================================+
//  this class purpose to give response for any input request from client                        
//  to server , Response explanation :                                                           
//                                                                                              
//      ok         -> this is boolean , to give client info that the request was success or failed  
//      statusCode -> this is String, give info to client and server what happend                   
//      message    -> this is String, give info to client what happend / what should do            
//      data       -> this is Any and optional, give data depend of the req, can be null           
// =============================================================================================+


module.exports = {
    response: function (ok, statusCode, message, data) {
        return {
            ok: ok,
            statusCode: statusCode,
            message: message,
            data: data
        }

    }
}