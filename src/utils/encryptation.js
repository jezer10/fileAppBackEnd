
const bc = require('bcrypt')

const encryptation = {}

encryptation.encryptPassword = async (password) => {
    try {
        const encryptedPassword = await bc.hash(password, 10)
        return encryptedPassword
    } catch (error) {
        console.log(error)
    }
}

encryptation.comparePassword = async (password,encryptedPassword)=>{
    try {
        const samePassword = await bc.compare(password,encryptedPassword)
        return samePassword
    } catch (error) {
        console.log(error)
    }
}

module.exports= encryptation