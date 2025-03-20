import GenericRepository from "./GenericRepository.js";

export default class QuotationRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    getAllQuotationsPopulated = () =>{
        return this.dao.getQuotationsWithCustomerDetails()
    }
    getQuotationById = (id) =>{
        return this.getBy({_id:id})
    }
    deleteQuotationById = (id) =>{
        return this.delete(id)
    }
    
}