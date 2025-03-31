
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
    getCustomerByNameOrCode = (name) =>{  
        return this.getAll({
            $or: [
                { name: { $regex: name, $options: "i" } }, // Coincidencias parciales en "name"
                { code: { $regex: name, $options: "i" } }  // Coincidencias parciales en "code"
            ]
        })
    }
    deleteCustomerById = (id) =>{
        return this.delete(id)
    }
    
}