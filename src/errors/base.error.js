/* 
    
    Base Class for error handling based on which other classes are going to handle the errors
    ; based on this class all the errors are going to get handled 
    other classes are going to extend out of this class

*/

class BaseError extends Error{
    constructor(name , statusCode , description , details ){
        super(description); // error is a super class
        this.name = name;
        this.statusCode = statusCode ;
        this.details = details ; // to fetch the details about the error   
        //Error.captureStackTrace(this); // to capture the stack trace of the error
        
        console.log("Printing Staack Trace ::");
        console.log(this.stack);
    }
}

module.exports = BaseError;
