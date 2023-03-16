const express = require('express');
const { Model } = require('mongoose');
const { Post } = require('../config/db_manupulate');
const db = require('../config/db_manupulate');

// creating router
const app = express.Router();

app.get('/',(req, res)=>{
    res.send('It is working')

});

app.post('/posts/create', async(req, res)=>{
    // extract user data
    const {title, sub_title, description} = req.body;
                                                                                                                                                                            
    // saving post
    try{
        const createdpost = await db.Post.create({title, sub_title, description})
        res.status(201).json({msg: 'Post Created Successfully'})
    }catch(error){
        res.status(500).json({msg: 'Error creating Post'})
    }
});

app.delete('/posts/:id', async(req, res)=>{

    try {
        const {id} = req.params;
        const rowDeleted = await Post.destroy({where:{id}})
        if (rowDeleted < 1)
        res.status(404).json({msg: 'Unable to delete post ', statusCode: 404})
        else
        res.status(200).json({msg: 'Post deleted', statusCode: 200})
    } catch (error) {
        res.status(500).json({msg: 'Unable to process request', statusCode: 500})
    }
})  

app.put('/posts/update/:id', async(req, res)=>{
    
    // id parameter
    const {id} = req.params;
    // content update
    const {title, sub_title, description} = req.body;
    
    try {
    const updatedPost = await db.Post.update({title, sub_title, description}, {where: {id}});

    if (updatedPost > 0)
        res.status(201  ).json({msg: 'Post updated successfully'})
    else{
        res.json({msg: 'Unable to update post'})
    }
} catch (error) {
        res.json({msg: 'Server error'})
}


})

// creating resources to get all posts
app.get('/posts', (req, res)=>{
    res.send('All Posts')
})


// exporting router
module.exports = app;