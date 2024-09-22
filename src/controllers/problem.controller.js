function pingProblemController(req , res){
    return res.json({message : 'Problem controller up '});
}

function addProblem(req , res){
    return res.status(501).json({
        message : 'Not implemented'
    });
}

function getProblem(req , res){
    return res.status(501).json({
        message : 'Not implemented'
    });
}

function getProblems(req,res){
    return res.status(501).json({
        message : 'Not implemented'
    });
}

function updateProblems(req,res){
    return res.status(501).json({
        message : 'Not implemented'
    });
}

function deleteProblems(req,res){
    return res.status(501).json({
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