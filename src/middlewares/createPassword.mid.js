import crypto from "crypto"

function createPassword (req, res, next) {
        // genero una nueva PW
        const newPassword = crypto.randomBytes(16).toString('hex')
        req.body.password = newPassword
        return next()
}
export default ( createPassword )