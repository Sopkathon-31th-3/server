import { Router } from "express";
import foodRouter from "./foodRouter";
import wishRouter from "./wishRouter";

const router: Router = Router();

router.use("/favorite-food", foodRouter);
router.use("/wish", wishRouter);

export default router;