// =======================================================================================+
// this class purpose to give response for any input request from client                 |
// to server , Response explanation :                                                    |
//                                                                                      |
//  ok -> this is boolean , to give client info that the request was success or failed  |
//  statusCode -> this is String, give info to client and server what happend           |
//  message -> this is String, give info to client what happend / what should do        |
//  message -> this is Any and optional, give data depend of the req, can be null       |
// =====================================================================================+

export default class Response {
    
    // add value data for response using constructor
    constructor(ok, statusCode, message, data) {
        this.ok = ok;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;

      }

      // convert data response to Json
      toJson(){
          return {
              ok:this.ok,
              statusCode : this.statusCode,
              message : this.message,
              data : this.data
          }

      }

}