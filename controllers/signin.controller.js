const User = require("../models/sign.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const crypto = require("crypto");
const secret = process.env.Access_Token_SECRET;

const SignIn = async (req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return (res.json({'status':'No','erorr':'404 User Not Found!',stat:'mail'}))
    }
    if (await bcrypt.compare(password,user.password))
    {
        const token = jwt.sign({email:user.email,id:user._id},secret)
        if(res.status(201))
        {
            return (res.json({'status':'ok','token':token}))
        }
        else
        {
            return (res.json({'status':'erorr'}))
        }
    }
    res.json({status:'No','error':'Passowrd invalid :(',stat:'pwd'})
}
module.exports = {SignIn , secret}