const mongoose = require("mongoose");
const bcrypt = require('bcrypt')


const UserSchema = new mongoose.Schema({
        firstName: { type: String, required: [true,"First name is required"] },
        lastName: { type: String, required: [true,"Last name is required"] },
        email: { type: String, required: [true,"Email is required"], unique:1 },
        password: { type: String, required: [true,"Password is required"] },
        username: { type: String ,unique:1},
        isVerified: { type: Boolean, default: false },
        isAdmin: { type: Boolean, default: false }
})

UserSchema.pre("save", async function(next) {
    let username = this.firstName[0].toLowerCase() + this.lastName.substring(0, 7).toLowerCase();
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      username = this.firstName.substring(0, 2).toLowerCase() + this.lastName.substring(0, 7).toLowerCase();
    }
    this.username = username;
    this.firstName = this.firstName.toLowerCase()
    this.lastName = this.lastName.toLowerCase()
    this.email = this.email.toLowerCase()
    let salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password ,salt)
    next();
  });

const User = mongoose.model('UserShema',UserSchema);

module.exports = User
