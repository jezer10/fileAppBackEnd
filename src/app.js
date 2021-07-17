const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const userRouter = require('./routes/user.route')
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.use("/api/v1/users",userRouter)


module.exports= app