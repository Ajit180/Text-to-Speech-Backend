import express from "express"
import v1Router from "./v1/v1Routes"

const router =express.Router();

router('v1',v1Router);

export default router;


