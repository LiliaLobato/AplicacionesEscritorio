const express = require('express')
const router = express.Router()
const path = require('path');

router.get('', express.json(), function(req, res){
    console.log(req.body)
    res.sendFile(path.join(__dirname, '..', 'views', 'hobbies.html')); 
});

module.exports = router;