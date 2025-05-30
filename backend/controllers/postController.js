import postModel from "../models/Post.js";

 export const getIndex = async(req , res)=>{
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
        res.render('index',
            {locals
            ,data,
            current : page , 
            nextPage : hasNextPage ? nextPage : null,
        });
    }catch(error){
        console.log(error);
    }
}
