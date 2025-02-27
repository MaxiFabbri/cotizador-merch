import { genSaltSync, hashSync, compareSync } from "bcryptjs";

function createHashUtil(password) {
    const salt = genSaltSync(10)
    const hashPassword = hashSync(password, salt)
    return hashPassword
}

function verifyHashUtil(password, dbPass) {
    const verify = compareSync(password, dbPass)
    return verify
}

export { createHashUtil, verifyHashUtil }