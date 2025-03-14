import GenericRepository from "./GenericRepository.js";

export default class QuotationRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getQuotationById = (id) =>{
        return this.getBy({_id:id})
    }
    deleteQuotationById = (id) =>{
        return this.delete(id)
    }
    
}