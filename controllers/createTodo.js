//import the model
const Todo=require('../models/Todo.js');

const createTodo=async(req,res)=>{
    try{
        //extract data from req body
        const {title,description}=req.body;

        //create a new Todo and insert in db 

        const response = await Todo.create({title,description});
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry created successfully"
        })

    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message
        })
    }

}

module.exports= createTodo;

