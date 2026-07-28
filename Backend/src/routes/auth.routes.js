import LoginRegister from "../controllers/auth.controller.js";
import express from "express";

const router = express.Router()

router.post("/register", LoginRegister.postRegister);
router.post("/login",LoginRegister.postLogin);
router.get("/me", LoginRegister.getMe)


export default router