const express = require('express');

const ProblemRouter = require('./problem.routes');

const v1Router = express.Router();

// if any request comes and route continues with /problems , we map it to the problemRouter
v1Router.use('/problem' , ProblemRouter);

module.exports = v1Router;
