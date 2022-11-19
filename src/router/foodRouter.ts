import { Router } from "express";
import { foodController} from "../controller";

const router: Router = Router();

//전체 유저 조회 get api/user
router.get('/', foodController.getFood);


export default router;