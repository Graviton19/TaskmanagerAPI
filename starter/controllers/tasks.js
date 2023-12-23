const task = require('../models/tasks')
const asyncWrapper = require('../middleware/async')

const getalltasks = asyncWrapper( async (req,res)=>{
        const tasks = await task.find({})
        res.status(200).json({ tasks })
})

const createtask = asyncWrapper( async(req,res)=>{
        const tasks = await task.create(req.body)
        res.status(200).json({tasks})
})

const gettask = asyncWrapper( async (req,res)=>{
        const tasks = await task.findOne({_id:req.params.id})
        if(!tasks)
        {
            return res.status(404).json({msg:`No Task with id : ${req.params.id}`})
        }
        res.status(200).json({tasks})
})

const Deletetask = asyncWrapper(async (req,res)=>{
        const tasks = await task.findOneAndDelete({_id:req.params.id})
        if(!tasks)
        {
            return res.status(404).json({msg:`No Task with id : ${req.params.id}`})
        }
        res.status(200).json({tasks})
})

const updatetask = asyncWrapper(async (req,res)=>{
        const tasks = await task.findOneAndUpdate({_id:req.params.id} , req.body,{
            new : true,
            runValidators: true,
        });
        if(!tasks)
        {
            return res.status(404).json({msg:`No Task with id : ${req.params.id}`})
        }
        res.status(200).json({tasks})
})

module.exports = {
    getalltasks,
    createtask,
    gettask,
    updatetask,
    Deletetask,
}