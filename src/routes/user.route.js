const passport = require('passport')
const app = require('../app')
require('../utils/auth/jwt')

const userRouter= require('express').Router()
const userController= require('../controllers/user.controller')
userRouter.post('/',passport.authenticate("jwt",{session:false}),userController.createUser)
userRouter.post('/only',passport.authenticate("jwt",{session:false}),userController.createOnlyUser)

module.exports=userRouter