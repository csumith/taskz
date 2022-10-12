const express = require('express')
const cors = require('cors')
const path = require('path')
const assert = require('assert')
const taskRoute = require('./route/taskRoute')


const port = 5000

// ref to express
const app = express();

// config the view engine
app.set('view engine', 'ejs')  // ejs -> template engines
app.set(`views`, './view')

// setting to cors
app.use(cors())

// body parsing middleware and json response
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // it is used to encode the data from frontend

// default route
app.use('/', taskRoute)

app.all('*',(req,res)=>{
    res.render('pnf')
})

// server listen
app.listen(port, () => {  // starting the server
   
    console.log(`server is running @ http://localhost:${port}`)
}) 