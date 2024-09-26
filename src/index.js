const express = require('express');
const bodyParser = require('body-parser');

const {PORT} =  require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/ErrorHandler');
const connectToDB = require('./config/db.config');
const { default: mongoose } = require('mongoose');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); // it is aa middleware that allows parsing of URL endoded bodies
app.use(bodyParser.text());
/* extended option allows you to choose between 
parsing the url encoded data with queryString library(when false) and qs library (when true)*/

app.use('/api' , apiRouter);

app.get('/ping' , (req,res) => {
    return res.json({message:'Problem Service is alive'});
});

// this is the last middle-ware if any error occurs
app.use(errorHandler);

app.listen(PORT , async() => {
    console.log(`Server started at Port : ${PORT}`);
    await connectToDB();
    console.log("Successfully connected to the database");

    // dummy code for testing 
    // const Cat = mongoose.model('Cat' , {name : String});

    // const kitty =  new Cat({name : 'archis'});
    // kitty.save().then(() => console.log('hiii'));

});

/*

    Inside the try block :
        1. opened a db connection
        2. queried on the db , but wrong syntax query error
        3. exception will be thrown 

    Inside the catch block :
        log the errors

    Inside the finally block :
        close the db connection

        // whenever we are creating the server we will create  brnd new error object 

    
    try{
        //throw new BaseError("Not Found" , 404 , "Resource not Found", {}); 
        throw new NotFoundError({}); 
        // console.log("inside try");
    }
    
    catch(error) {
         console.log("Something went Wrong " , error.name , error.details , error.stack ); 
    }

    // it does-not matter whether there is an error or not the finally block will always get executed
    finally{
        console.log("executed finally");
    }
    

*/