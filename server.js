import express from "express";
import fetch from 'node-fetch';


const app= express();

app.get('/api/comments',async(req,res)=>{

    if (req.query.limit) {

    const response= await fetch('https://jsonplaceholder.typicode.com/comments')
    var comments= await response.json();
    //console.log(comments)
    

    
        const Limitedcomments = comments.slice(0, req.query.limit);
        res.send(Limitedcomments);
    }
})

app.get('/api/posts',async(req,res)=>{

    if (req.query.limit) {

    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    var posts= await response.json(); 

    
        const Limitedposts = posts.slice(0, req.query.limit);
        res.send(Limitedposts);
    }
})


app.listen(3000,()=>{
    console.log("now listening on port 3000");
})