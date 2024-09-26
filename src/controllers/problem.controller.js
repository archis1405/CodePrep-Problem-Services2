const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');

function pingProblemController(req , res ){
    return res.json({message : 'Problem controller up '});
}

function addProblem(req , res , next){
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }

    catch(error){
        next(error); // calling the next middleware with the corresponding error
    }
}

function getProblem(req , res , next){
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }

    catch(error){
        next(error); // calling the next middleware with the corresponding error
    }
}

function getProblems(req , res , next){
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }

    catch(error){
        next(error); // calling the next middleware with the corresponding error
    }
}

function updateProblems(req , res , next){
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }

    catch(error){
        next(error); // calling the next middleware with the corresponding error
    }
}

function deleteProblems(req , res , next){
    try{
        // nothing implemented
        throw new NotImplemented('addProblem');
    }

    catch(error){
        next(error); // calling the next middleware with the corresponding error
    }
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