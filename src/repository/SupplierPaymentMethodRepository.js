
import GenericRepository from "./GenericRepository.js";

export default class SupplierPaymentMethodRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getSupplierPaymentMethodById = (id) =>{
        return this.getBy({_id:id});
    }
    deleteSupplierPaymentMethodById = (id) =>{
        return this.delete(id)
    }
}