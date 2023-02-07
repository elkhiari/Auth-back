const mongoose = require('mongoose')


mongoose.set('strictQuery', false);


const connectDb = async (URI)=>{
    mongoose
        .connect(URI)
}

module.exports = connectDb