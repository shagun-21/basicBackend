//import the model
const Todo=require('../models/Todo.js');

const deleteTodo=async(req,res)=>{
    try{
      const {id}=req.params;


        const todo = await Todo.findByIdAndDelete({
            _id:id
        });
        res.status(200).json({
            success:true,
            data:todo,
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

module.exports= deleteTodo;

