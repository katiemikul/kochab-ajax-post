const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

const recordRouter = require('./routes/record.route');

//static files
app.use(express.static('server/public')); 
app.use(bodyParser.urlencoded({extended: true})); //have to have this in order to push

//this will live in the database shortly
const recordCollection=require('./modules/record-collection');

//routes - get, post, put, delete requests
app.use('/record', recordRouter)

app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}`);

});
