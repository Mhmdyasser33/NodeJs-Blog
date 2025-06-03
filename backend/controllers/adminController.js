import bcrypt from "bcrypt" ;
import jsoWebToken from "jsonwebtoken" 
import userModel from '../models/user.js'
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
        const {username , password} = req.body ;
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
export const dashboard = async (req, res) => {
    res.render('admin/dashboard');
}