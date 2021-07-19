
const { basicAuth } = require('../controllers/auth.controller');
const authRouter = require('express').Router();


authRouter.post('/token', basicAuth)

module.exports = authRouter;