import GenericRepository from "./GenericRepository.js";

export default class SupplierRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getSupplierByEmail = (email) =>{
        return this.getBy({email});
    }
    getSupplierById = (id) =>{
        return this.getBy({_id:id})
    }
    deleteSupplierById = (id) =>{
        return this.delete(id)
    }
}