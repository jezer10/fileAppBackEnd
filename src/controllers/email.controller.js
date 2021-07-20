const nodemailer = require('nodemailer')

const emailController = {}

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'noresponderupeu@outlook.com',
        pass: '7576123Jjj'
    }
})





emailController.sendEmail = async(req, res) => {

    try {
        const { emails, subject, text } = req.body
        if (!emails || !subject || !text) {
            throw new Error('Unkwnown Params')
        }
        const emailString = emails.join(", ")
        const options = {
            from: 'EP SISTEMAS <noresponderupeu@outlook.com>',
            to: emailString,
            subject,
            text,
            html: `
            <h1>${subject}</h1>
            <p>${text}</p>
            `

        }

        const info = await transporter.sendMail(options)
        if (info.accepted.length >= 0) {
            return res.status(200).send('Email Sended')
        }
        throw new Error('Error while sending Email')

    } catch (error) {
        return res.status(500).json({ 'err': error.message })
    }
}

module.exports = emailController