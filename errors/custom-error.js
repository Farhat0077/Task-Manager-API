

class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode =statusCode
    }
}
const creatCustomError=(msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}
module.exports= {creatCustomError, CustomAPIError}