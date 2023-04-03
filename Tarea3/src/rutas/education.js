const express = require('express')
const router = express.Router()
const path = require('path');

router.get('', express.json(), function(req, res){
    res.sendFile(path.join(__dirname, '..', 'views', 'education.html')); 
});

module.exports = router;