const router = require('express').Router()
const auth = require('./../middleware').auth;

const rutasDaily = require('./daily')
const rutasEducation = require('./education')
const rutasHobbies = require('./hobbies')

router.use('', auth);
router.use('/daily', rutasDaily);
router.use('/education', rutasEducation);
router.use('/hobbies', rutasHobbies);



module.exports = router