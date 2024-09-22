const express = require('express');
const bodyParser = require('body-parser');

const {PORT} =  require('./config/server.config');
const apiRouter = require('./routes');

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

app.listen(PORT , () => {
    console.log(`Server started at Port : ${PORT}`);
});