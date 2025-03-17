import CustomRouter from "../../utils/CustomRouter.util.js";
import { 
    createProduct, 
    readProduct,
    getProductByQuotationId,
    updateProduct, 
    destroyProduct 
} from "../../controllers/products.controllers.js";


class ProductsApiRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }
    init = () => {
        this.create("/", ["USER", "ADMIN"], createProduct);
        this.read("/", ["USER", "ADMIN"], readProduct);
        this.read("/:quotationId", ["USER", "ADMIN"], getProductByQuotationId);
        this.update("/:id", ["USER", "ADMIN"], updateProduct);
        this.destroy("/:id", ["USER", "ADMIN"], destroyProduct);      
    };
}

const productsApiRouter = new ProductsApiRouter();
export default productsApiRouter.getRouter();