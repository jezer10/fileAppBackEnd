
const passport = require('passport');
const { basicAuth } = require('../controllers/auth.controller');
const authRouter = require('express').Router();
const boom = require('@hapi/boom')
require('../utils/auth/jwt')

authRouter.post('/token', basicAuth)
authRouter.post('/validate', passport.authenticate("jwt", { session: false }), (req, res, next) => {


    if (!req.user) {
        return next(boom.unauthorized())
    }

    return res.status(200).json('Valid Token')
})

module.exports = authRouter;