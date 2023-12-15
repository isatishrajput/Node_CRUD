const express = require('express')
const userRouter = require('./routes/user')
const {ConnectMongo} = require('./connection')
const {logReqRes} = require('./middleWare')

const PORT = 8000;
const app = express();

ConnectMongo('mongodb://127.0.0.1:27017/my_first_db')

//Middleware Plugin
app.use(express.urlencoded({ extended: false}))
app.use(logReqRes("log.txt"));



app.use('/api/users', userRouter);
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))