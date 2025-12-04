const user=require("../model/login")

exports.create_user=async(req,res)=>{
    const User = await user.create(req.body)
    res.json(User)
}