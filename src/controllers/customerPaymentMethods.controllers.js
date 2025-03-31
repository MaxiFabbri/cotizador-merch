import { customerPaymentMethodService } from "../services/index.service.js";


async function createCustomerPaymentMethod(req, res) {
    const message = "CUSTOMER PAYMENT METHOD CREATED";
    const data = req.body;
    const response = await customerPaymentMethodService.create(data);
    return res.status(201).json({ response, message });
}
async function readCustomerPaymentMethod(req, res) {
    const message = "CUSTOMER PAYMENT METHODS FOUND";
    const response = await customerPaymentMethodService.getAll();
    return res.status(200).json({ response, message });
}
async function readCustomerPaymentMethodById(req, res) {
    const { id } = req.params;
    const message = "CUSTOMER PAYMENT METHODS FOUND";
    const response = await customerPaymentMethodService.getCustomerPaymentMethodById(id);
    return res.status(200).json({ response, message });
}
async function readCustomerPaymentMethodByName(req, res) {
    const { name } = req.body;
    const message = "CUSTOMER PAYMENT METHODS FOUND";
    const response = await customerPaymentMethodService.getCustomerPaymentMethodByName(name);
    return res.status(200).json({ response, message });
}
async function updateCustomerPaymentMethod(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "CUSTOMER PAYMENT METHOD UPDATED";
    const response = await customerPaymentMethodService.update(id, data);
    return res.status(200).json({ response, message });
}
async function destroyCustomerPaymentMethod(req, res) {
    const { id } = req.params;
    const message = "CUSTOMER PAYMENT METHOD DELETED";
    const response = await customerPaymentMethodService.delete(id);
    return res.status(200).json({ response, message });
}


export {
    createCustomerPaymentMethod, 
    readCustomerPaymentMethod,
    readCustomerPaymentMethodById,
    readCustomerPaymentMethodByName,
    updateCustomerPaymentMethod, 
    destroyCustomerPaymentMethod 
}