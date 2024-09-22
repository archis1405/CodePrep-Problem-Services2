const express = require('express');

const { problemController } = require('../../controllers'); 

const problemRouter = express.Router();

// // if any request comes nd route continues with /ping , we map it to the pingProblemController
problemRouter.get('/ping' , problemController.pingProblemController);

problemRouter.get('/:id' , problemController.getProblem);

problemRouter.get('/' , problemController.getProblems);

problemRouter.post('/' , problemController.addProblem);

problemRouter.delete('/:id' , problemController.deleteProblems);

problemRouter.put('/:id' , problemController.updateProblems);


module.exports = problemRouter;
