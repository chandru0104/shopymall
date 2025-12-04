const express=require("express")
const app=express()
const db=require("./controller/login")
app.use(express.json())

const login=require("./router/roter")

app.use(login)
app.listen(5000,()=>console.log("server on 5000"))