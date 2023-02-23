const express = require('express');

// creating router
const app = express.Router();

app.get('/',(req, res)=>{
    res.send('It is working')

});

app.post('/posts/create', (req, res)=>{
    res.json(req.body)
});

// creating resources to get all posts
app.get('/posts', (req, res)=>{
    res.send('All Posts')
})


// exporting router
module.exports = app;