const fileRouter = require('express').Router()
const passport = require('passport')
const { uploadFile } = require('../controllers/file.controller')
const { fileMulter } = require('../utils/multerFilter')
require('../utils/auth/jwt')

fileRouter.post('/', passport.authenticate("jwt", { session: false }), fileMulter, uploadFile)

module.exports = fileRouter