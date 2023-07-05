const express = require('express');
  
const app = express();
const PORT = 3000;
const mongoose = require("mongoose")
const mongoUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/users"
/** connect to MongoDB datastore */
    mongoose.connect(mongoUrl)
    .then(() => console.log("MongoDB connected…"))
    .catch(err=>{ console.error(err)})


const userRoutes = require('./routes/UserRoutes')
app.use('/api/users', userRoutes)
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);