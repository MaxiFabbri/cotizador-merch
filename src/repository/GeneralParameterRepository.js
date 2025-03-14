
import GenericRepository from "./GenericRepository.js";

export default class GeneralParameterRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }

    deleteGeneralParameterById = (id) =>{
        return this.delete(id)
    }
    
}