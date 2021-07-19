const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const UserService = require('../../services/user.service')
const userService = new UserService;

const basicMiddleware = async (username, password, next) => {
    try {
        if (!(await userService.hasUser({ username, password }))) {
            return next(boom.unauthorized(), false)
        }
        return next(null, { username })

    } catch (error) {
        return next(error)
    }
}

const basicStrategy = new BasicStrategy(basicMiddleware)

passport.use(basicStrategy)

