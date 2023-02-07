const express = require('express');
const SignUp = require('../controllers/sign.controller');
const routee = express.Router();


routee.route('/').post(SignUp)



module.exports = routee