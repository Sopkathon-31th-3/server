import { Request, Response } from "express";
import { resultService } from "../service";

const getResult = async ( req: Request, res: Response) => {

    const data = await resultService.getResult();

    return res.status(200).json({ "status": 200, "success": true, "message" : "결과 페이지 조회 성공", data })

}


const resultController = {
    getResult,
};

export default resultController;