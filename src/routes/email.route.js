const { sendEmail } = require('../controllers/email.controller')

const emailRouter = require('express').Router()

emailRouter.post('/',sendEmail)

module.exports = emailRouter