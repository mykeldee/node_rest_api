const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    role: {
        type:String,
        required:true
    },
    dateJoined: {
        type:Date,
        required:true,
        default:Date.now,
    }
})

module.exports = mongoose.model("User", userSchema)
