import { Router } from "express";
import foodRouter from "./foodRouter";
import wishRouter from "./wishRouter";
import resultRouter from "./resultRouter";

const router: Router = Router();

router.use("/favorite-food", foodRouter);
router.use("/wish", wishRouter);
router.use("/result", resultRouter);

export default router;