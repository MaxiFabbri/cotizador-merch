import { quotationService } from "../services/index.service.js";


async function createQuotation(req, res) {
    const message = "QUOTATION CREATED";
    const data = req.body;
    const response = await quotationService.create(data);
    return res.status(201).json({ response, message });
}
async function readQuotation(req, res) {
    const message = "QUOTATIONS FOUND";
    const response = await quotationService.getAll();
    return res.status(200).json({ response, message });
}
async function readQuotationById(req, res) {
    const { id } = req.params;
    const message = "QUOTATION FOUND";
    const response = await quotationService.getquotationPaymentMethodById(id);
    return res.status(200).json({ response, message });
}

async function updateQuotation(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "QUOTATION UPDATED";
    const response = await quotationService.update(id, data);
    return res.status(200).json({ response, message });
}
async function destroyQuotation(req, res) {
    const { id } = req.params;
    const message = "QUOTATION DELETED";
    const response = await quotationService.delete(id);
    return res.status(200).json({ response, message });
}


export {
    createQuotation, 
    readQuotation,
    readQuotationById,
    updateQuotation, 
    destroyQuotation 
}