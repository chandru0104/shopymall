const express=require("express")
const router=express.Router()

const {create_user}=require("../controller/login")

router.post("api/login",create_user)

module.exports=router