
import GenericRepository from "./GenericRepository.js";

export default class CustomerRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getCustomerByEmail = (email) =>{
        return this.getBy({email});
    }
    getCustomerById = (id) =>{
        return this.getBy({_id:id})
    }
    deleteCustomerById = (id) =>{
        return this.delete(id)
    }
    
}