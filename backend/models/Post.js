import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    title : {type : String , required : true},
    body :{type : String , required : true},
},{timestamps : true})
const postModel = mongoose.model("post", postSchema);
export default postModel;