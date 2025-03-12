
import GenericRepository from "./GenericRepository.js";

export default class CustomerPaymentMethodRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getCustomerPaymentMethodById = (id) =>{
        return this.getBy({_id:id});
    }
    deleteCustomerPaymentMethodById = (id) =>{
        return this.delete(id)
    }
}