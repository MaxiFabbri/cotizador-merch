import CustomRouter from "../../utils/CustomRouter.util.js";
import sessionsApiRouter from "./sessions.api.js";
import usersApiRouter from "./users.api.js";


class ApiRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.use("/users", ["PUBLIC"], usersApiRouter);
    //this.use("/products", ["PUBLIC"], productsApiRouter);
    //this.use("/carts", ["PUBLIC"], cartsApiRouter);
    //this.use("/auth", ["PUBLIC"], sessionsApiRouter)
    this.use("/sessions", ["PUBLIC"], sessionsApiRouter);
  };
}

const apiRouter = new ApiRouter();
export default apiRouter.getRouter();