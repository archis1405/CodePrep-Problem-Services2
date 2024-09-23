const { StatusCodes } = require('http-status-codes');

function pingProblemController(req , res){
    return res.json({message : 'Problem controller up '});
}

function addProblem(req , res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : 'Not implemented'
    });
}

function getProblem(req , res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : 'Not implemented'
    });
}

function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : 'Not implemented'
    });
}

function updateProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : 'Not implemented'
    });
}

function deleteProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : 'Not implemented'
    });
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblems,
    updateProblems,
    pingProblemController
}

/*

    res.status -> returns the same response object with status property set
    .json -> returns the same response object which hs sttus set but this json to 
             be returned is also set

*/