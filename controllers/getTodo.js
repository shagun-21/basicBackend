//import the model
const Todo=require('../models/Todo.js');

const getTodo=async(req,res)=>{
    try{
        //get all todo from db
        const todos= await Todo.find({});

        res.status(200).json({
            success:true,
            data:todos,
            message:"entire todos fetched "

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

const getTodoById=async(req,res)=>{
    try{
       
        //get id from req body

        const id= req.params.id;
        const todo=await Todo.findById({_id:id});

        //if not found
        if(!todo){
            res.status(404).json({
                success:false,
                message:"Not data found",
            })
        }

        //happy case

        res.status(200).json({
            success:true,
            data:todo,
            message:`data for id ${id} found`
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

module.exports= getTodo;
module.exports=getTodoById;