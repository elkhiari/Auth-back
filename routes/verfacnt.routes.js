const express = require('express');
const { sendVerificationEmail } = require('../controllers/verfacnt.controller');
const verificationRoute = express.Router();

const User = require('../models/sign.model')

verificationRoute.route('/verify-email/:id').get(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.json({msg:'no'});
      await User.updateOne({_id : req.params.id},{isVerified : true});
      res.json({msg:'ok'});
    } catch (error) {
      console.error(error);
      res.send(error.message);
    }
  })

  verificationRoute.route('/verify-email').post((req,res)=>{
    sendVerificationEmail(req.body)
    res.json({status:'ok'})
  })



module.exports = verificationRoute