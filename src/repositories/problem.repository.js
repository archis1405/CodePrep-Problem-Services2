const {Problem} = require('../models');

class ProblemRepository{

    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                title : problemData.title,
                description : problemDaat.description,
                testCases : (problemData.testCaases) ? problemData.testCases : [] 
            });

            return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;