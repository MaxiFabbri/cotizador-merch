import { processService } from "../services/index.service.js"

async function createProcess(req, res) {
    const message = "PROCESS CREATED";
    const data = req.body;
    const response = await processService.create(data);
    return res.status(201).json({ response, message });
}
async function readProcess(req, res) {
    const message = "PROCESS FOUND";
    const response = await processService.getAll();
    return res.status(200).json({ response, message });
}
async function getProcessByProductId(req, res) {
    const { productId } = req.params;
    console.log("PROCESS Controller: ",productId);
    const message = "PROCESS FOUND";
    const response = await processService.getProcessByProductId(productId);
    return res.status(200).json({ response, message });
}
async function updateProcess(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "PRODUCT UPDATED";
    const response = await processService.update(id, data);
    return res.status(200).json({ response, message });
}
async function destroyProcess(req, res) {
    const { id } = req.params;
    const message = "PRODUCT DELETED";
    const response = await processService.delete(id);
    return res.status(200).json({ response, message });
}


export { createProcess, readProcess, getProcessByProductId, updateProcess, destroyProcess }