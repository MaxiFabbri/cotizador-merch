import { readByEmail } from "../dao/mongo/managers/users.manager.js"

async function isValidUser(req, res, next) {
    console.log("isValidUser: ",req.body)
    try {
        const { email, password } = req.body
        const one = await readByEmail(email)
        if (one) {
            return next()
        }
        const error = new Error("INVALID CREDENTIALS")
        error.statusCode = 401
        throw error
    } catch (error) {
        return next(error)
    }
}

export default isValidUser