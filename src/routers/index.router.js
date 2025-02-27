import CustomRouter from "../utils/CustomRouter.util.js";
import apiRouter from "./api/index.api.js";

class IndexRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.use("/api", ["PUBLIC"], apiRouter);
  };
}

const indexRouter = new IndexRouter();
export default indexRouter.getRouter()

