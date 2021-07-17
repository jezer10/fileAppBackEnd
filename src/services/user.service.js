const p = require('../database')
const e = require('../utils/encryptation')
class UserService {

    constructor() {

    }

    createOnlyUser = async (user) => {
        try {
            const { username, password, idperson } = user
            const encryptedPassword = await e.encryptPassword(password)
            const response = await p.query("insert into users (username,password,idperson,state) values ($1,$2,$3,true)", [username, encryptedPassword, idperson])
            return response
        } catch (error) {
            throw new Error(error.message)
        }
    }

    createUser = async (user) => {
        try {
            const { firstname, lastname, username, password } = user

            const responsePerson = await p.query("insert into persons (fname,lname) values ($1,$2) returning idperson", [firstname, lastname])
            const [row]=responsePerson.rows 
            const responseUser = await this.createOnlyUser({username,password,"idperson":row})
        } catch (error) {
            throw new Error(error.message)
        }

    }
}

module.exports = UserService