const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')

app.use(express.static('./public'));
app.use(express.json());

const PORT = 3000;

app.use('/api/v1/tasks',tasks)
app.use(notFound)

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT,console.log(`listening on port ${PORT}`)); 
    }
    catch(error)
    {
        console.log(error);
    }
}

start();