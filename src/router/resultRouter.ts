import { Router } from "express";
import resultController from "../controller/resultController";

const router: Router = Router();

// router.get('/', resultController.getResult);
router.post('/', resultController.postResult);

export default router;