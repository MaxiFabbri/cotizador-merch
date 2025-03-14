import { generalParameterService } from "../services/index.service.js"

async function createGeneralParameters(req, res) {
    const message = "GENERAL PARAMETERS CREATED";
    const data = req.body;
    const response = await generalParameterService.create(data);
    return res.status(201).json({ response, message });
}
async function readGeneralParameters(req, res) {
    const message = "GENERAL PARAMETERS FOUND";
    const response = await generalParameterService.getAll();
    return res.status(200).json({ response, message });
}
async function updateGeneralParameters(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "GENERAL PARAMETERS UPDATED";
    const response = await generalParameterService.update(id, data);
    return res.status(200).json({ response, message });
}
async function destroyGeneralParameters (req, res) {
    const { id } = req.params;
    const message = "GENERAL PARAMETERS DELETED";
    const response = await generalParameterService.delete(id);
    return res.status(200).json({ response, message });
}


export { 
    createGeneralParameters, 
    readGeneralParameters, 
    updateGeneralParameters, 
    destroyGeneralParameters
 }