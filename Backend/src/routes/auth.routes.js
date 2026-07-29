import LoginRegister from "../controllers/auth.controller.js";
import authenticate from "../middlewares/authenticate.js";
import express from "express";
import logger from "../middlewares/logger.js";
import validate from "../middlewares/validate.js";
import { registerSchema } from "../middlewares/validateRegister.js";
import { loginSchema } from "../middlewares/validateLogin.js";

const router = express.Router()

router.post("/register",logger,validate(registerSchema), LoginRegister.postRegister);
router.post("/login",logger,validate(loginSchema), LoginRegister.postLogin);
router.get("/me",logger, authenticate, LoginRegister.getMe)


export default router