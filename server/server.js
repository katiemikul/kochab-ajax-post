const express = require('express');
const app = express();
const PORT = 5000;

//static files
app.use(express.static('server/public')); 
app.use(express.static('server/module'));

//this will live in the database shortly
const recordCollection=require('./modules/record-collection');

//routes - get, post, put, delete requests
app.get('/recordCollection', (req, res) => {
    res.send(recordCollection);
});

app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}`);

});
