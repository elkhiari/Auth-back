const express = require('express')
const connectDb = require('../db/connect')
const signupRoute = require('../routes/sign.route')
const signinRoute = require('../routes/signin.route')
const verificationRoute = require('../routes/verfacnt.routes')
const GetData = require('../routes/getAlldata.route')
require('dotenv').config()
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())



app.use('/api/v1/me',GetData)
app.use('/api/v1/signup',signupRoute)
app.use('/api/v1/signin',signinRoute)
app.use('/',verificationRoute)


const ConnectIntoDB = async (Port,Uri)=>{
    try {
        await connectDb(Uri)
        app.listen(Port,console.log(`App is working on port ${Port}`))
    } catch (error) {
        console.log(error)
    }
}



ConnectIntoDB(process.env.App_Port,process.env.Mongo_Token)