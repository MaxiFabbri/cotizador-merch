import GenericRepository from "./GenericRepository.js";

export default class ProcessRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getProcessByProductId = (quotationId) =>{
        return this.getAll({quotationId});
    }
    getProcessById = (id) =>{
        return this.getBy({_id:id})
    }
    deleteProcessById = (id) =>{
        return this.delete(id)
    }
    
}