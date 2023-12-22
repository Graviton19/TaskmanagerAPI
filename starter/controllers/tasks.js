const task = require('../models/tasks')
const asyncWrapper = require('../middleware/async')
const getalltasks = async (req,res)=>{
    try{
        const tasks = await task.find({})
        res.status(200).json({ tasks })
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const createtask = async(req,res)=>{
    try{
        const tasks = await task.create(req.body)
        res.status(200).json({tasks})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const gettask = async (req,res)=>{
    try{
        // console.log(req.params.id)
        const tasks = await task.findOne({_id:req.params.id})
        if(!tasks)
        {
            return res.status(404).json({msg:`No Task with id : ${req.params.id}`})
        }
        res.status(200).json({tasks})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const Deletetask = async (req,res)=>{
    try{
        const tasks = await task.findOneAndDelete({_id:req.params.id})
        if(!tasks)
        {
            return res.status(404).json({msg:`No Task with id : ${req.params.id}`})
        }
        res.status(200).json({tasks})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const updatetask = async (req,res)=>{
    try{
        const tasks = await task.findOneAndUpdate({_id:req.params.id} , req.body,{
            new : true,
            runValidators: true,
        });
        if(!tasks)
        {
            return res.status(404).json({msg:`No Task with id : ${req.params.id}`})
        }
        res.status(200).json({tasks})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getalltasks,
    createtask,
    gettask,
    updatetask,
    Deletetask,
}