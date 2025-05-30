import { getIndex, getPostById } from "../../controllers/postController.js"
import postModel from "../../models/Post.js";
export default function(router){
   router.get('/' , getIndex)
   router.get('/post/:id' , getPostById)
}

/* function insertPostData(){
   postModel.insertMany([
       {
           title: "Welcome to the Blog",
           body: "This is the opening post. We'll share updates, tutorials, and tech news here!",
       },
       {
           title: "JavaScript Basics",
           body: "JavaScript is a versatile language used on both front-end and back-end.",
       },
       {
           title: "How to Use MongoDB with Node.js",
           body: "Learn how to connect your Node.js app with MongoDB using Mongoose.",
       },
       {
           title: "What is REST API?",
           body: "REST is an architectural style for designing networked applications.",
       },
       {
           title: "Top 5 VS Code Extensions",
           body: "These extensions will boost your productivity while coding in VS Code.",
       },
       {
           title: "Understanding Async/Await",
           body: "Async/Await makes asynchronous code easier to read and maintain.",
       },
       {
           title: "Frontend vs Backend",
           body: "Know the difference between frontend and backend development.",
       },
       {
           title: "How to Use Git and GitHub",
           body: "Git is a version control system, and GitHub is where your code lives in the cloud.",
       },
       {
           title: "Best Practices for Writing Clean Code",
           body: "Write readable, maintainable, and efficient code by following these tips.",
       },
       {
           title: "Node.js Middleware Explained",
           body: "Middleware functions are the heart of Express.js applications.",
       },
       {
           title: "Build a Simple CRUD App",
           body: "Learn how to create, read, update, and delete data using Node.js and MongoDB.",
       },
       {
           title: "Deploy Node.js App on Render",
           body: "Render is a simple way to host your full-stack Node.js application.",
       },
       {
           title: "Using Bootstrap for Responsive Design",
           body: "Bootstrap helps you build responsive websites faster with pre-made components.",
       },
       {
           title: "Intro to EJS Templates",
           body: "EJS allows you to embed JavaScript into your HTML files.",
       },
       {
           title: "Form Handling in Express.js",
           body: "Learn how to capture and process form data in Express.",
       },
       {
           title: "How Sessions Work in Express",
           body: "Sessions allow you to store user data across requests.",
       },
       {
           title: "Top 10 Interview Questions for Node.js",
           body: "Prepare for your next Node.js interview with these popular questions.",
       },
       {
           title: "How to Use Postman for API Testing",
           body: "Postman is a powerful tool for testing and documenting APIs.",
       },
       {
           title: "Understanding NoSQL Databases",
           body: "Learn the difference between SQL and NoSQL databases like MongoDB.",
       },
       {
           title: "Securing Express Apps",
           body: "Use Helmet, CORS, and validation to secure your Express apps.",
       }
   ]).then(()=>{
       console.log("Data inserted successfully");
   }).catch((error)=>{
       console.log(error.message);
   })
}

insertPostData() */