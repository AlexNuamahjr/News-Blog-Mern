const express = require('express');
const dotenv = require('dotenv').config();
const frontendRoute = require('./routes/frontend');
// creating express app
const app = express();
// using express bodyparser
app.use(express.urlencoded({extended: false}))

const port = process.env.PORT || 8080;

// frontend routes
app.use('/', frontendRoute)



app.listen(port, ()=>{
    console.log(`Server has started on http://localhost:${port}`);
});