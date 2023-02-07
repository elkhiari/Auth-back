const Userss = require("../models/sign.model")
const { sendVerificationEmail } = require("./verfacnt.controller")

const SignUp = async (req,res)=>{
        const {firstName,lastName,email,password} = req.body
        const user = new Userss({firstName,lastName,email,password})
        user.save((err)=>{
            if (err) return (res.json({"error":err,"status":"No"}))
            else {
                sendVerificationEmail(user);
                return (res.json({user,"status":"Yes"}))
            }
        })
        // const users = await Userss.create(req.body)
        // 
        // res.status(200).json({"UsersCreate":users})
        // console.log({data:{firstName:firstName,lastName:lastName,email:email,Password:password}})
}


module.exports = SignUp