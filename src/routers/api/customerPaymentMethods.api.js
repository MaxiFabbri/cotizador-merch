import CustomRouter from "../../utils/CustomRouter.util.js";
import { 
    createCustomerPaymentMethod, 
    readCustomerPaymentMethod,
    readCustomerPaymentMethodById,
    updateCustomerPaymentMethod, 
    destroyCustomerPaymentMethod 
} from "../../controllers/customerPaymentMethods.controllers.js";


class CustomerPaymentMethodsApiRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }
    init = () => {
        this.create("/", ["USER", "ADMIN"], createCustomerPaymentMethod);
        this.read("/", ["USER", "ADMIN"], readCustomerPaymentMethod);
        this.read("/:id", ["USER", "ADMIN"], readCustomerPaymentMethodById);
        this.update("/:id", ["USER", "ADMIN"], updateCustomerPaymentMethod);
        this.destroy("/:id", ["USER", "ADMIN"], destroyCustomerPaymentMethod);      
    };
}

const customerPaymentMethodsApiRouter = new CustomerPaymentMethodsApiRouter();
export default customerPaymentMethodsApiRouter.getRouter();