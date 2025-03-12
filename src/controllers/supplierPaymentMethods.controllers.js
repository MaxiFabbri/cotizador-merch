import { supplierPaymentMethodService } from "../services/index.service.js";


async function createSupplierPaymentMethod(req, res) {
    const message = "SUPPLIER PAYMENT METHOD CREATED";
    const data = req.body;
    const response = await supplierPaymentMethodService.create(data);
    return res.status(201).json({ response, message });
}
async function readSupplierPaymentMethod(req, res) {
    const message = "SUPPLIER PAYMENT METHODS FOUND";
    const response = await supplierPaymentMethodService.getAll();
    return res.status(200).json({ response, message });
}
async function readSupplierPaymentMethodById(req, res) {
    const { id } = req.params;
    const message = "SUPPLIER PAYMENT METHODS FOUND";
    const response = await supplierPaymentMethodService.getSupplierPaymentMethodById(id);
    return res.status(200).json({ response, message });
}

async function updateSupplierPaymentMethod(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "SUPPLIER PAYMENT METHOD UPDATED";
    const response = await supplierPaymentMethodService.update(id, data);
    return res.status(200).json({ response, message });
}
async function destroySupplierPaymentMethod(req, res) {
    const { id } = req.params;
    const message = "SUPPLIER PAYMENT METHOD DELETED";
    const response = await supplierPaymentMethodService.delete(id);
    return res.status(200).json({ response, message });
}


export {
    createSupplierPaymentMethod,
    readSupplierPaymentMethod,
    readSupplierPaymentMethodById,
    updateSupplierPaymentMethod,
    destroySupplierPaymentMethod
}