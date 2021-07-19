const { response } = require('express')
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
            const [row] = responsePerson.rows
            const responseUser = await this.createOnlyUser({ username, password, "idperson": row.idperson })
        } catch (error) {
            throw new Error(error.message)
        }

    }

    hasUser = async ({username,password}) => {

        try {

            const responseUsername = await p.query("select username,password from users where username=$1", [username])
            const [user] = responseUsername.rows
            if(!user){
                return false
            }
            if (user.username !== username) {
                return false
            }
            const passwordIsEqual = await e.comparePassword(password, user.password)
            if (!passwordIsEqual) {
                return false
            }
            return true
        } catch (error) {
            throw new Error(error.message)
        }
    }

    getUserByUsername= async(username)=>{
        try {
            const response= await p.query("select username,iduser from users where username=$1 and state=true",[username])

            const [user] = response.rows

            if(user){
                return user
            }

            throw new Error('El usuario no existe');

        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = UserService