const express = require('express');

const mongoose = require('mongoose')

const app = express();

const cors = require('cors')

mongoose.connect("mongodb://localhost:27017/taskdb").then(console.log('connected'))
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use(cors())


app.use('/Post',require('./Routes/PostRoute'))
app.use('/User',require('./Routes/UserRoute'));

app.listen(3000,()=>{
    console.log('server running on 3000')
})