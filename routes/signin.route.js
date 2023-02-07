const express = require('express');
const {SignIn} = require('../controllers/signin.controller');
const routee = express.Router();


routee.route('/').post(SignIn)



module.exports = routee