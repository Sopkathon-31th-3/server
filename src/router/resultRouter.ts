import { Router } from "express";
import resultController from "../controller/resultController";

const router: Router = Router();

router.get('/', resultController.getResult);

export default router;