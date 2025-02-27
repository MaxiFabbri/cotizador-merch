import {
    createUserService,
    readUserService,
    updateUserService,
    destroyUserService,
    verifyUserService
} from "../services/users.service.js"

async function createUser(req, res) {
    const message = "USER CREATED";
    const data = req.body;
    const response = await createUserService(data);
    return res.status(201).json({ response, message });
}
async function readUsers(req, res) {
    const message = "USERS FOUND";
    const response = await readUserService();
    return res.status(200).json({ response, message });
}
async function updateUser(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "USER UPDATED";
    const response = await updateUserService(id, data);
    return res.status(200).json({ response, message });
}
async function destroyUser(req, res) {
    const { id } = req.params;
    const message = "USER DELETED";
    const response = await destroyUserService(id);
    return res.status(200).json({ response, message });
}

export { createUser, readUsers, updateUser, destroyUser }