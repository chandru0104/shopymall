const mongoose = require("mongoose")

const admin_login=new mongoose.Schema({
    email:String,
    password:String
})

module.exports=admin_login