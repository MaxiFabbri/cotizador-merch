import dao from "../dao/Users.dao.js"
const { UsersManager } = dao

async function createUserService(data) {
    const response = await UsersManager.create(data);
    return response;
}
async function readUserService() {
    const response = await UsersManager.read();
    return response;
}
async function updateUserService(id, data) {
    const response = await UsersManager.update(id, data);
    return response;
}
async function destroyUserService() {
    const response = UsersManager.destroy(id);
    return response;
}
async function readUserByIdService(id) {
    const response = await UsersManager.readById(id);
    return response;
}
async function readUserByEmailService(email) {
    const response = await UsersManager.readByEmail(email);
    return response;
}
async function verifyUserService(email, verifyCode) {
    const user = await UsersManager.readByEmail(email)
    if (verifyCode === user.verifyCode) {
        await UsersManager.update( user._id, {verifiedUser: true})
        return true
    } else {
        return false
    }
}


export {
    createUserService,
    readUserService,
    updateUserService,
    destroyUserService,
    readUserByIdService,
    readUserByEmailService,
    verifyUserService
 }