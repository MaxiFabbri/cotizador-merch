import CustomRouter from "../../utils/CustomRouter.util.js";
import { 
    createSupplier,
    readSupplier,
    readSupplierById,
    updateSupplier,
    destroySupplier
} from "../../controllers/suppliers.controllers.js";
    


class SuppliersApiRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }
    init = () => {
        this.create("/", ["USER", "ADMIN"], createSupplier);
        this.read("/", ["USER", "ADMIN"], readSupplier);
        this.read("/:id", ["USER", "ADMIN"], readSupplierById);
        this.update("/:id", ["USER", "ADMIN"], updateSupplier);
        this.destroy("/:id", ["USER", "ADMIN"], destroySupplier);      
    };
}

const suppliersApiRouter = new SuppliersApiRouter();
export default suppliersApiRouter.getRouter();