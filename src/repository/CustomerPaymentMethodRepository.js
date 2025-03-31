
import GenericRepository from "./GenericRepository.js";

export default class CustomerPaymentMethodRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }

    getCustomerPaymentMethodById = (id) => {
        return this.getBy({ _id: id });
    }
    getCustomerPaymentMethodByName = (name) => {
        console.log("Repository Name: ", name)
        return this.getAll({
            customer_payment_description: { $regex: name, $options: "i" }
            // Coincidencias parciales en "customer_payment_description"
        })
    }
    deleteCustomerPaymentMethodById = (id) => {
        return this.delete(id)
    }
}