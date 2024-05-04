const express = require("express"); // import express
const app = express(); // launch app instance of express
const mongodb = require("./data/database.js"); // import database

const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

mongodb.initDb((err) =>{
    if (err){
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log(`Database listening and node is Running on port ${port}`)});
    }
});


