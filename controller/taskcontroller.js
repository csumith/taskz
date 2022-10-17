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
       
        const id = req.params.id // to read ref id from router

        const data = await Task.findById({_id: id})
      // console.log('single =', data)
        res.render('update', {task: data})
     },
     createTask:async (req,res)=>{
       const {title, content, start ,end,user} = req.body 

       const newTask = await Task({title, content, start ,end,user})
       newTask.save();
       console.log('task created successfully')
      

      // console.log("data=", newTask)
      res.redirect('/')
     },
     updateTask: async (req,res)=>{
     const data =req.body
      console.log('updated data = ',data)

      await Task.findOneAndUpdate({ _id: req.params.id }, data)
      console.log('task updated')
      res.redirect('/')
     },

    deleteTask: async (req,res) =>{
      const id = req.params.id
      await Task.findByIdAndDelete({_id: id})
      console.log('deleted success')
      res.redirect('/')
    }
}

module.exports = taskController