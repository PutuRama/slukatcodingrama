export default class Response {
    
    constructor(ok, statusCode, message, data) {
        this.ok = ok;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;

      }

      toJson(){
          return {
              ok:this.ok,
              statusCode : this.statusCode,
              message : this.message,
              data : this.data
          }

      }

}