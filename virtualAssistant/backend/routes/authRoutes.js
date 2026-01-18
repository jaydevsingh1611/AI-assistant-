import express from "express";
import { Login, Logout, signUp } from "../controllers/auth.js";

export const authRouter = express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/signin",Login)
authRouter.get("/logout",Logout)