import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

//* 유저 생성 - POST api/user
router.post(
    "/",
    [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
    userController.createUser
  );

export default router;
