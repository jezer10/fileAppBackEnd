const p = require('../database')

class FileService {

    constructor() {

    }

    createFile = async (file) => {
        try {
            const { filename, type, url, iduser } = file
            const response = await p.query('insert into files (filename,type,url,iduser) values ($1,$2,$3,$4)', [filename,type,url,iduser])
            return response
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = FileService