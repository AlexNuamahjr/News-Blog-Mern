const express = require('express');
const dotenv = require('dotenv').config();
// const frontendRoute = require('./routes/frontend');
const app = express();

const port = process.env.PORT || 8080;



app.listen(port, ()=>{
    console.log(`Server has started on http://localhost${port}`);
});