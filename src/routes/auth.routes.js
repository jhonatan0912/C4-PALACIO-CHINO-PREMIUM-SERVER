import { Router } from "express";
import { registerHandler, loginHandler } from "../controllers/auth.controller.js";

const router = Router();

router.get('/login/:email/:password', loginHandler)

router.post('/register', registerHandler)


export default router;