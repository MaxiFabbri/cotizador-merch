import CustomRouter from "../../utils/CustomRouter.util.js";
import sessionsApiRouter from "./sessions.api.js";
import usersApiRouter from "./users.api.js";
import generalParametersApiRouter from "./generalParameters.api.js";

import customerPaymentMethodsApiRouter from "./customerPaymentMethods.api.js";
import suppliersApiRouter from "./suppliers.api.js";
import supplierPaymentMethodsApiRouter from "./supplierPaymentMethods.api.js";
import customersApiRouter from "./customers.api.js";
import quotationsApiRouter from "./quotations.api.js";
import productsApiRouter from "./products.api.js";
import processesApiRouter from "./processes.api.js";


class ApiRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.use("/users", ["PUBLIC"], usersApiRouter);
    this.use("/general-parameters", ["PUBLIC"], generalParametersApiRouter);
    this.use("/customers", ["PUBLIC"], customersApiRouter);
    this.use("/customer-payment-methods", ["PUBLIC"], customerPaymentMethodsApiRouter);
    this.use("/suppliers", ["PUBLIC"], suppliersApiRouter);
    this.use("/supplier-payment-methods", ["PUBLIC"], supplierPaymentMethodsApiRouter);
    this.use("/quotations", ["PUBLIC"], quotationsApiRouter);
    this.use("/products", ["PUBLIC"], productsApiRouter);
    this.use("/processes", ["PUBLIC"], processesApiRouter);
    this.use("/sessions", ["PUBLIC"], sessionsApiRouter);
  };
}

const apiRouter = new ApiRouter();
export default apiRouter.getRouter();