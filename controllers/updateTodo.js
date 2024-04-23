//import the model
const Todo=require('../models/Todo.js');

const updateTodo=async(req,res)=>{
    try{
      //get id from req param
      const {id} =req.params;
      //fetch t and d
      const {title,description}=req.body;

      const todo=await Todo.findByIdAndUpdate(
        //important*****************
        {_id:id},
        {title,description,updatedAt:Date.now()}
      )

      res.status(200).json({
        success:true,
        data:todo,
        message:"Updated Successfully"
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

module.exports= updateTodo;

