const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./Middleware/errorMiddleware')
const connectDb = require('./Config/db')

const port  = process.env.PORT || 5000

connectDb()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./Routes/goalRoutes'))
app.use(errorHandler) 

app.listen(port, ()=> console.log(`server started on ${port}`)) 

