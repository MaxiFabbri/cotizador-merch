import { usersService } from "../services/index.service.js"

async function createUser(req, res) {
    const message = "USER CREATED";
    const data = req.body;
    const response = await usersService.create(data);
    return res.status(201).json({ response, message });
}
async function readUsers(req, res) {
    const message = "USERS FOUND";
    const response = await usersService.getAll();
    return res.status(200).json({ response, message });
}
async function updateUser(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "USER UPDATED";
    const response = await usersService.update(id, data);
    return res.status(200).json({ response, message });
}
async function destroyUser(req, res) {
    const { id } = req.params;
    const message = "USER DELETED";
    const response = await usersService.delete(id);
    return res.status(200).json({ response, message });
}


export { createUser, readUsers, updateUser, destroyUser }