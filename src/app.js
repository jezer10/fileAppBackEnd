const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')
const fileRouter = require('./routes/file.route')
const app = express()
app.use(express.json())
app.use(cors({}))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/auth', authRouter)
app.use("/api/v1/users", userRouter)
app.use('/api/v1/files', fileRouter)

app.use((err, req, res, next) => {
    if(err.output){
        res.status(err.output.statusCode || 500).json({ 'err': err.message })

    } else{
        res.status(500).json({'err':err.message})
    }

})

module.exports = app