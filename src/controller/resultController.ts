import { Request, Response } from "express";
import { resultService } from "../service";

// const getResult = async (req: Request, res: Response) => {
//   const data = await resultService.getResult();

//   return res.status(200).json({ status: 200, success: true, message: "결과 페이지 조회 성공", data });
// };

const postResult = async (req: Request, res: Response) => {
    const { foodName, wishItemPrice } = req.body;
  
    if (!foodName || !wishItemPrice ) {
      return res.status(400).json({ status: 400, success: false, message: "BAD_REQUEST" });
    }
  
    try {
      const data = await resultService.postFood(foodName, wishItemPrice);
      
      res.status(200).json({ "status": 200, "success" : true, "message": "결과페이지 전송 성공", data })
    } catch (error) {
      res.status(500).json({ "status": 500, "success" : false, "message": "INTERNAL_SERVER_ERROR" })
    }
  };

const resultController = {
//   getResult,
  postResult
};

export default resultController;
