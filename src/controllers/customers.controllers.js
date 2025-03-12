import { customerService } from "../services/index.service.js";


async function createCustomer(req, res) {
    const message = "CUSTOMER CREATED";
    const data = req.body;
    const response = await customerService.create(data);
    return res.status(201).json({ response, message });
}
async function readCustomer(req, res) {
    const message = "CUSTOMERS FOUND";
    const response = await customerService.getAll();
    return res.status(200).json({ response, message });
}
async function readCustomerById(req, res) {
    const { id } = req.params;
    const message = "CUSTOMER FOUND";
    const response = await customerService.getCustomerPaymentMethodById(id);
    return res.status(200).json({ response, message });
}

async function updateCustomer(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "CUSTOMER UPDATED";
    const response = await customerService.update(id, data);
    return res.status(200).json({ response, message });
}
async function destroyCustomer(req, res) {
    const { id } = req.params;
    const message = "CUSTOMER DELETED";
    const response = await customerService.delete(id);
    return res.status(200).json({ response, message });
}


export {
    createCustomer, 
    readCustomer,
    readCustomerById,
    updateCustomer, 
    destroyCustomer 
}