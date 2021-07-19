const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom')
const passport = require('passport')

require('../utils/auth/basic')

const authController = {}

authController.basicAuth = async (req, res, next) => {
    passport.authenticate("basic", (error, user) => {
        try {
            if (error || !user) {
               return next(boom.unauthorized());
            }
            req.login(user, { session: false }, async (error) => {
                if (error) {
                    return next(error)
                }

                const payload = { sub: user.username }
                const token = jwt.sign(payload, process.env.JWT_TOKEN_SECRET, {
                    expiresIn: "15m"
                })
                return res.status(200).json({ "token": token });
            })
        } catch (error) {
            return next(error)
        }
    })(req, res, next)
}

module.exports = authController