import CustomRouter from "../../utils/CustomRouter.util.js";
import { 
    createProcess, 
    readProcess,
    getProcessByProductId,
    updateProcess, 
    destroyProcess 
} from "../../controllers/processes.controllers.js";


class ProcessesApiRouter extends CustomRouter {
    constructor() {
        super();
        this.init();
    }
    init = () => {
        this.create("/", ["USER", "ADMIN"], createProcess);
        this.read("/", ["USER", "ADMIN"], readProcess);
        this.read("/:productId", ["USER", "ADMIN"], getProcessByProductId);
        this.update("/:id", ["USER", "ADMIN"], updateProcess);
        this.destroy("/:id", ["USER", "ADMIN"], destroyProcess);      
    };
}

const processesApiRouter = new ProcessesApiRouter();
export default processesApiRouter.getRouter();