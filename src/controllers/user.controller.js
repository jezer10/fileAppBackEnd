const UserService = require("../services/user.service")

const userService= new UserService()

const userController ={}

userController.createUser= async (req,res)=>{
    try {
        const {firstname,lastname,username,password} = req.body
        const user = {firstname,lastname,username,password}
        const response = await userService.createUser(user)
        res.send('Complete User Created!')
    } catch (error) {
        res.status(500).send({'err':error.message})
    }

}

userController.createOnlyUser = async (req,res) =>{
    try {
        const {username,password,idperson} = req.body

        const user = {username,password,idperson}

        const response = await userService.createOnlyUser(user)

        res.send('User Created!')

        
    } catch (error) {
        res.status(500).send({'err':error.message})
    }
}



module.exports= userController