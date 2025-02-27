import CustomRouter from "../../utils/CustomRouter.util.js";
import passportCb from "../../middlewares/passportCb.mid.js";
import passport from "../../middlewares/passport.mid.js";
import createPassword from "../../middlewares/createPassword.mid.js"
import { register, login, signout, online, google, verify, resetPassword } from "../../controllers/sessions.controllers.js";

class SessionsApiRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.create("/register", ["PUBLIC"], passportCb("register"), register);
    this.create("/login", ["PUBLIC"], passportCb("login"), login);
    this.create("/signout", ["USER", "ADMIN"], passportCb("signout"), signout);
    this.create("/online", ["USER", "ADMIN"], passportCb("online"), online);
    this.create("/verify", ["PUBLIC"], verify)
    this.create("/reset", ["PUBLIC"], createPassword, passportCb("resetPassword"), resetPassword)
    //this.read("/google", ["PUBLIC"], passportCb("google", { scope: ["email", "profile"] }));
    this.read("/google", ["PUBLIC"], passport.authenticate("google", { scope: ["email", "profile"] }));
    this.read("/google/cb", ["PUBLIC"], passport.authenticate('google', { session: false }), login);
  };
}

const sessionsRouter = new SessionsApiRouter();
export default sessionsRouter.getRouter();