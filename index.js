const express= require("express");
const app= express();

//use to load data from .env file into process object
require("dotenv").config();

//use to handle json data 
app.use(express.json());
const PORT=process.env.PORT || 4000;

//import routes to mount 
const todoRoutes= require('./routes/todos.js')

//mount api
app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log("port running");
})

//connect to db 
const dbConnect= require('./config/db.js')
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send("hello world");
})