const jwt = require("jsonwebtoken");
const Users = require("../models/sign.model");
const secret = process.env.Access_Token_SECRET;

const Alldata = async(req,res)  =>{
    const {token} = req.body
    if(!token) return res.json({status:'No'})
    try{
        const user = jwt.verify(token,secret);
        const emailUser = user.email
        Users.findOne({_id:user.id},(error,document)=>{
            if(error) res.json({error:err,status:'No'})
            else res.json({user:document,status:'Yes'})
        })
    }catch(err){
        return res.json({status:'No'})
    }
}

module.exports = Alldata