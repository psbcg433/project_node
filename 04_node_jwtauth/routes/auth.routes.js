import express from "express";
import { userLogin,userRegister,userLogout } from "../controllers/auth.controller.js";

const authRouter = express.Router()

authRouter.post('/login',userLogin)
authRouter.post('/register',userRegister)
authRouter.get('/logout',userLogout)

export default authRouter