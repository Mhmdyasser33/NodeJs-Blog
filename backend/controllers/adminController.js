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
        if(username === 'admin' && password ==='password'){
             return res.send('you are logged in.')
        }else{
             return res.send('wrong username or password') ; 
        }
    }catch(error){
        console.log(error)
    }
}