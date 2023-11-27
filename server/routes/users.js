import express from "express";
import {magicLogin} from '../controller/users.js'
const router=express();

router.post("/magic-login",magicLogin)


export default router;