import { Router } from "express";
import foodRouter from "./foodRouter";

const router: Router = Router();

router.use("/favorite-food", foodRouter);

export default router;
