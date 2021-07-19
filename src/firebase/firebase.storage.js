const firebase = require('./firebase.initializer')


const firebaseStorage = {}

const storage = firebase.app().storage()

const storageRef = storage.ref()


const filesRef = storageRef.child('files')


firebaseStorage.upload = async (file,user) => {

    try {
        if (!file) {
            throw new Error("File doesn't exist")
        }

        const userRef= filesRef.child(user)

        const fileRef = userRef.child(file.name)

        const fileResponse = fileRef.put(file.buffer,{contentType:file.mimetype})

        return fileResponse

    } catch (error) {
        return next(new Error(error.message))
    }



}


module.exports = firebaseStorage
