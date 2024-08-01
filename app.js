const express = require('express');
const app = express();
const tasks= require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound=require('./middleware/not found')
const errorHandlerMiddleware=require('./middleware/error-Handler')
// middleware
require('./db/connect')
app.use(express.static('./public'))
app.use(express.json())

//routes 
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port= process.env.PORT || 3000
// run this command For Windows PowerShell $env:PORT=4000 node app.js


const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        
app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch(error){

        console.log(error)
    }
}
start()
