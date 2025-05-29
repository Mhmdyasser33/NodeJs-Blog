import mongoose from "mongoose";

const connectDb = async()=>{
    try{
        mongoose.set('strictQuery' , false) ; 
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("database connected successfully")
        })
    }catch(error){
          console.log(error)  
    }
}

export default connectDb;