const express = require('express');
const router = express.Router(); //Router is a class or a constructor (hence it being capitalized)
const recordCollection=require('../modules/record-collection'); //two dots goes up two places to the server folder

router.get('/', (req, res) => {
    res.send(recordCollection);
});

router.post('/', (req, res) => {
    console.log(req.body); //this is whatever data we send back to the server
    recordCollection.push(req.body);
    res.sendStatus(201); //200 = ok, 201 = created
});

module.exports = router;
