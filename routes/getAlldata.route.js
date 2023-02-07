const express = require('express');
const AllData = require('../controllers/alldata.controller');
const routee = express.Router();


routee.route('/').post(AllData)



module.exports = routee