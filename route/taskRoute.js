const route = require('express').Router()
const taskController = require('../controller/taskcontroller')


route.get('/', taskController.index)
route.get('/create', taskController.new)
route.get('/edit/:id', taskController.edit)

//query reference =>/:id ie params
route.post(`/newTask`, taskController.createTask)
route.post('/updateTask/:id', taskController.updateTask)


route.get('/delete/:id', taskController.deleteTask)

module.exports = route