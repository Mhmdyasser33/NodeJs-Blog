import bcrypt from "bcrypt" ;
import jsoWebToken from "jsonwebtoken" 
import userModel from '../models/user.js'
import postModel from "../models/Post.js";
const adminLayout = '../views/layouts/admin'
export const adminInfo = async(req , res)=>{
    try{
        const locals = {
            title: 'NodeJs Blog',
            description: 'Simple Blog created with NodeJs, Express & MongoDB.'
        } 
       return res.render('admin/index' , {locals , layout : adminLayout})
    }catch(error){
        console.log(error)
    }
}
export const loginHandler = async(req, res)=>{
    try{
        const { username , password } = req.body ;
        if(!username || !password) 
        return res.send('Please fill all the fields') ;
        const user = await userModel.findOne({username}) ;
        if(!user) return res.send(`User ${username} not found`) ;
        const isPasswordCorrect = await bcrypt.compare(password,user.password) ; 
        if (!isPasswordCorrect) return res.send('Password not correct');
        const token = jsoWebToken.sign({userId : user._id , role : 'admin'} , process.env.JWT_SECRET) ;
        res.cookie('token' , token ,{httpOnly : true});
        res.redirect('/dashboard');
    }catch(error){
        console.log(error)
    }
}
export const registerHandler = async(req , res)=>{
    try{
        const { username , password } = req.body ; 
        const saltRounds = 10 ; 
        const hashedPassword = await bcrypt.hash(password , saltRounds) ; 
        const user = await userModel.create({
            username , 
            password : hashedPassword
        })
      return res.status(201).json({message : 'User created successfully',user}) ; 
    }catch(error){
     console.log(error) ; 
    }

}

export const displayRegisterPage = (req , res)=>{
    try{
        const locals = {
           title : 'Register page',
            description: 'Simple Blog created with NodeJs, Express & MongoDB.'
        }

        res.render('admin/register' , {
            locals , 
            layout : adminLayout
        })
        
    }catch(error){
     console.log(error);
    }
}
export const dashboard = async (req, res) => {
   try{
       const locals = {
           title: 'Dashboard',
           description: 'Simple Blog created with NodeJs, Express & MongoDB.'
       }
       const data = await postModel.find({}) ;
       res.render('admin/dashboard',{
       locals,
       layout : adminLayout,
       data
       });
   }catch(error){
      console.log(error)
   }
}

export const displayAddPostPage = async(req , res)=>{
    try{
        const locals = {
            title: 'Add Post',
            description: 'Simple Blog created with NodeJs, Express & MongoDB.'
        }
        const data = await postModel.find({});
        res.render('admin/add-post' , {
            locals,
            data,
            layout : adminLayout
        })

    }catch(error){
     console.log(error)
    }

}

export const addPostHandler = async(req , res)=>{
    try{
        const {title , body } = req.body;
        const newPost = new postModel({title,body})
        await postModel.create(newPost) ; 
        res.redirect('/dashboard') ; 
    }catch(error){
        console.log(error)
    }

}

export const displayUpdatePostPage = async(req , res)=>{
    try{
        const locals = {
            title: 'Edit Post',
            description: 'Simple Blog created with NodeJs, Express & MongoDB.'
        }
        const {id} = req.params;
        const data = await postModel.findById(id);
        res.render('admin/edit-post' ,{
            locals,
            data,
            layout : adminLayout
        })
    }catch(error){
     console.log(error)
    }
}

export const updatePostHandler = async(req , res)=>{
    try{
        const {id} = req.params;
       const {title , body} = req.body ; 
       const post = await postModel.findById(id) ; 
       post.title = title ; 
       post.body = body ;
       await post.save();
       res.redirect('/dashboard')
    }catch(error){
      console.log(error)
    }
}
export const deletePostHandler = async(req , res)=>{
    try{ 
     await postModel.deleteOne({_id : req.params.id})
     res.redirect('/dashboard')
    }catch(error){
        console.log(error)
    }
}

export const logoutHandler = async(req , res)=>{
    try{
        res.clearCookie('token') ;
        res.redirect('/');
    }catch(error){
       console.log(error)
    }
}