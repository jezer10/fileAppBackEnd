const multer = require('multer')
const storage = multer.memoryStorage()


const multerFilters = {}


const fileFilter = (req, file, next) => {
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.presentationml.presentation']
    const fileType = file.mimetype
    if (!allowedTypes.includes(fileType)) {
        return next(new Error('Unhandled File type'))
    }

    return next(null, true)

}

multerFilters.fileMulter = multer({
    storage, fileFilter: fileFilter, limits: {
        fileSize: 5 * 1024 * 1024
    }
}).single('file')


module.exports = multerFilters