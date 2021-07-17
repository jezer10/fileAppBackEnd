const app = require('../app')

const userRouter= require('express').Router()
const userController= require('../controllers/user.controller')
userRouter.post('/',userController.createUser)
userRouter.post('/only',userController.createOnlyUser)

module.exports=userRouter