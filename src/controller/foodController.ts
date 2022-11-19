import { Request, Response } from "express";
import { foodService } from "../service";

const getFood = async (req: Request, res: Response) => {
  const data = await foodService.getFood();
  return res
    .status(200)
    .json({ status: 200, message: "음식 조회 성공", data });
};

const foodController ={
  getFood
}

export default foodController;