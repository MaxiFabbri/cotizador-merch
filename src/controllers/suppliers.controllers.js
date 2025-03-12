import { supplierService } from "../services/index.service.js";


async function createSupplier(req, res) {
    const message = "SUPPLIER PAYMENT METHOD CREATED";
    const data = req.body;
    const response = await supplierService.create(data);
    return res.status(201).json({ response, message });
}
async function readSupplier(req, res) {
    const message = "SUPPLIER PAYMENT METHODS FOUND";
    const response = await supplierService.getAll();
    return res.status(200).json({ response, message });
}
async function readSupplierById(req, res) {
    const { id } = req.params;
    const message = "SUPPLIER PAYMENT METHODS FOUND";
    const response = await supplierService.getSupplierById(id);
    return res.status(200).json({ response, message });
}

async function updateSupplier(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "SUPPLIER PAYMENT METHOD UPDATED";
    const response = await supplierService.update(id, data);
    return res.status(200).json({ response, message });
}
async function destroySupplier(req, res) {
    const { id } = req.params;
    const message = "SUPPLIER PAYMENT METHOD DELETED";
    const response = await supplierService.delete(id);
    return res.status(200).json({ response, message });
}


export {
    createSupplier,
    readSupplier,
    readSupplierById,
    updateSupplier,
    destroySupplier
}