const mongoose = require("mongoose")

const connectDB= async ()=>{
    try {
      await  mongoose.connect("mongodb+srv://shopymall_db:<shopymall_db0104>@cluster0.ud4klfo.mongodb.net/?appName=Cluster0")
        console.log("db connect")
    }
    catch(e){
        console.log(e)
    }
}

module.exports=connectDB