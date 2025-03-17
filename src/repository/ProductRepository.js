import GenericRepository from "./GenericRepository.js";

export default class ProductRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getProductByQuotationId = (quotationId) =>{
        return this.getAll({quotationId});
    }
    getProductById = (id) =>{
        return this.getBy({_id:id})
    }
    deleteProductById = (id) =>{
        return this.delete(id)
    }
    
}