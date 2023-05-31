const {ValidationError} = require('joi');

const errorHandler =(error, req, res, next) =>{

    //default error
    let status = 500;
    let data ={
        messege:'Internal server error'
    }

    if(error instanceof ValidationError)
    //if error is validation error
    {
        status=401;  //401
        data.messege = error.message;
        return res.status(status).json(data);

    }
    if(error.status)
    {
        status=error.status;
    }
    if(status.message)
    {
        data.messege=error.message
    }

    return res.status(status).json(data);

}

module.exports=errorHandler;