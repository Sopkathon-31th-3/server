import { Router } from "express";
import { wishController } from "../controller";

const router: Router = Router();

router.post('/', wishController.createWish);

export default router;