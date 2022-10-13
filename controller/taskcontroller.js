 const Task = require('../model/taskModel')
 
 const taskController = {
     index: async (req,res)=>{
      const tasksList = await Task.find({})
       // console.log('tasks=',taskList)
        res.render('index',{ tasks: tasksList})
     },
     new: async (req,res)=>{
        res.render('create')
     },
     edit: async (req,res)=>{
        res.render('update')
     },
     createTask:async (req,res)=>{
       const {title, content, start ,end,user} = req.body 

       const newTask = await Task({title, content, start ,end,user})
       newTask.save();
       console.log('task created successfully')
      

      // console.log("data=", newTask)
      res.redirect('/')
     }
}

module.exports = taskController