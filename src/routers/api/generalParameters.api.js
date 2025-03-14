import CustomRouter from "../../utils/CustomRouter.util.js";
import { 
    createGeneralParameters, 
    readGeneralParameters,
    updateGeneralParameters, 
    destroyGeneralParameters 
} from "../../controllers/generalParameters.controllers.js";


class GeneralParametersApiRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }
    init = () => {
        this.create("/", ["ADMIN"], createGeneralParameters);
        this.read("/", ["ADMIN"], readGeneralParameters);
        this.update("/:id", ["ADMIN"], updateGeneralParameters);
        this.destroy("/:id", ["ADMIN"], destroyGeneralParameters);      
    };
}

const generalParametersApiRouter = new GeneralParametersApiRouter();
export default generalParametersApiRouter.getRouter();