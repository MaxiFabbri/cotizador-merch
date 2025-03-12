import CustomRouter from "../../utils/CustomRouter.util.js";
import { 
    createSupplierPaymentMethod,
    readSupplierPaymentMethod,
    readSupplierPaymentMethodById,
    updateSupplierPaymentMethod,
    destroySupplierPaymentMethod
} from "../../controllers/supplierPaymentMethods.controllers.js";
    


class SupplierPaymentMethodsApiRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }
    init = () => {
        this.create("/", ["USER", "ADMIN"], createSupplierPaymentMethod);
        this.read("/", ["USER", "ADMIN"], readSupplierPaymentMethod);
        this.read("/:id", ["USER", "ADMIN"], readSupplierPaymentMethodById);
        this.update("/:id", ["USER", "ADMIN"], updateSupplierPaymentMethod);
        this.destroy("/:id", ["USER", "ADMIN"], destroySupplierPaymentMethod);      
    };
}

const supplierPaymentMethodsApiRouter = new SupplierPaymentMethodsApiRouter();
export default supplierPaymentMethodsApiRouter.getRouter();