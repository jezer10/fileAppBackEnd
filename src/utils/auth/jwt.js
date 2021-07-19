const passport = require("passport");

const { Strategy, ExtractJwt } = require("passport-jwt")

const boom = require('@hapi/boom')

const UserService = require('../../services/user.service')

const userService = new UserService

passport.use(
    new Strategy({
        secretOrKey: process.env.JWT_TOKEN_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (tokenPayload, next) => {
        try {
            const user = await userService.getUserByUsername(tokenPayload.sub)
            if (!user) {
                return next(boom.unauthorized(), false)
            }
            return next(null, user)

        } catch (error) {
            return next(error)
        }

    })
)