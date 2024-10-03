// Defining the mongoDB schema 

const mongoose = require('mongoose');

/*
    We can now call this schema function that this mongoose object is going to give us 
    it is kind of like a schema constructor where we will cll new schema aand inside this 
    we can pass our objects

    Inside this object we can add all the corresponding properties that this object will have 
*/

//Logical viwe of how the collections look like 

const problemSchema = new mongoose.Schema({

    title:{
        type: String,
        required: [true , 'Title cnnot be empty' ] // basically this is the validtion provided to the DB
    },

    description:{
        type:String,
        required : [true,'Description cannot be empty']
    },

    difficulty:{
        type:String,
        enum:['easy','medium','hard'],
        required :[true , 'Difficulty cannot be empty'],
        default : 'easy' // if the user forgets to enter difficulty by default it will be always easy
    },

    /*
        So in testcases we are mapping input to output
        [{input : '5', output :'10'},{input:'2' , output : '20' }]
        so here we are basically mapping the input to the output
    */
    testCases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            }
        }
    ],

    editorial:{
        type:String // this is not a mndtory field 
    }

});

const Problem = mongoose.model('Problem',problemSchema);  // this is the mongoose model
/*
    Mongoose model is a model using which we can query a MongoDB for this 
    particular collection . So basicaally here we are creating aa model object . 
*/
module.exports = Problem;