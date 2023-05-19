import express from "express";
import fetch from 'node-fetch';


const app= express();

app.get('/api/comments',async(req,res)=>{

    const response= await fetch('https://jsonplaceholder.typicode.com/comments')
    var comments= await response.json();
    //console.log(comments)

    if (req.query.limit) {
    
        const Limitedcomments = comments.slice(0, req.query.limit);
        res.send(Limitedcomments);
    } 
    else res.send(comments);
})

app.get('/api/posts',async(req,res)=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    var posts= await response.json();

    if (req.query.limit) {
    
        const Limitedposts = posts.slice(0, req.query.limit);
        res.send(Limitedposts);
    } else res.send(posts)
})


app.listen(3000,()=>{
    console.log("now listening on port 3000");
})