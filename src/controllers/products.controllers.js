import { productService } from "../services/index.service.js"

async function createProduct(req, res) {
    const message = "PRODUCT CREATED";
    const data = req.body;
    const response = await productService.create(data);
    return res.status(201).json({ response, message });
}
async function readProduct(req, res) {
    const message = "PRODUCT FOUND";
    const response = await productService.getAll();
    return res.status(200).json({ response, message });
}
async function getProductByQuotationId(req, res) {
    const { quotationId } = req.params;
    console.log("Product Controller: ",quotationId);
    const message = "PRODUCT FOUND";
    const response = await productService.getProductByQuotationId(quotationId);
    return res.status(200).json({ response, message });
}
async function updateProduct(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "PRODUCT UPDATED";
    const response = await productService.update(id, data);
    return res.status(200).json({ response, message });
}
async function destroyProduct(req, res) {
    const { id } = req.params;
    const message = "PRODUCT DELETED";
    const response = await productService.delete(id);
    return res.status(200).json({ response, message });
}


export { createProduct, readProduct, getProductByQuotationId, updateProduct, destroyProduct }