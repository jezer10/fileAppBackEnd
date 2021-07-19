const { v4: uuidV4 } = require('uuid')
const mime = require('mime')

const { upload } = require("../firebase/firebase.storage")
const FileService = require('../services/file.service')
const fileService = new FileService()

const fileController = {}

fileController.uploadFile = async (req, res, next) => {
    try {
        const file = req.file
        const { iduser,username } = req.user
        if (!file || !iduser||!username) {
            throw new Error("File doesn't exist")
        }




        const fileName = `${uuidV4()}.${mime.getExtension(file.mimetype)}`
        file['name'] = fileName

        const uploadStatus = await upload(file,username)
        console.log(file)
        const fileResponse = await fileService.createFile({ filename: file.originalname, type: file.mimetype, url: file.name, iduser })
        return res.status(200).json('File Uploaded')
    } catch (error) {
        return next(error)
    }

}

module.exports = fileController