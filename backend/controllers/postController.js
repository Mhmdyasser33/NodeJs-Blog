import postModel from "../models/Post.js";
const adminLayout = '../views/layouts/admin'
export const renderHomePage = async(req , res)=>{
    try{
        const locals = {
            title: 'NodeJs Blog',
            description: 'Simple Blog created with NodeJs, Express & MongoDB.'
        }
        const postsPerPage = 10 ;
        const page = req.query.page || 1 ; 
        // to sort them from newest to oldest
        const data = await postModel.aggregate([{$sort : {createdAt: -1,} }]) 
        .skip(postsPerPage * page - postsPerPage) // to skip the posts that are already on the page and show the next 10 posts
        .limit(postsPerPage)
        .exec();
        const postsStoredInDb = await postModel.countDocuments();
        const nextPage = parseInt(page) + 1 ; // to show the next page
        const hasNextPage = nextPage <= Math.ceil(postsStoredInDb / postsPerPage);
        return res.render('index',
            {locals
            ,data,
            current : page , 
            nextPage : hasNextPage ? nextPage : null,
        });
    }catch(error){
        console.error("Error loading home page:", error);
        res.status(500).json({ message: "Internal Server Error"});
    }
}

export const getPostById = async(req , res)=>{
    try{
        const { id } = req.params ; 
        const data = await postModel.findById({_id : id}) ; 
        const locals = {
            title: data.title,
            description: 'Simple Blog created with NodeJs, Express & MongoDB.'
        }
        return res.render('post' , {locals,data}) ; 
    }catch(error){
     console.error(`Error in getting postInfo by id ${error}`)
     return res.status(500).json({message : "Internal Server Error"}) ;
    }
}

export const searchPosts = async(req , res)=>{
    try{
        const locals = {
            title: 'Search',
            description: 'Simple Blog created with NodeJs, Express & MongoDB.'
        }
       const { searchTerm } = req.body;
       const searchTermWithoutSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g,'') ;
       const data = await postModel.find({
        $or : [
               { 'title': new RegExp(searchTermWithoutSpecialChar, 'i') },
               { 'body':  new RegExp(searchTermWithoutSpecialChar, 'i') },
        ]
       })
       let noFoundPostMessage = '' 
       if(data.length === 0){
       noFoundPostMessage = `No results Found For ${searchTerm}`
       }
        return res.render('search', {
            locals,
            data,
            noFoundPostMessage
        })
       
    }catch(error){
        console.error("Error in Searching:" + error);
        return res.status(500).json({ message: "Internal Server Error"});
    }
}
  