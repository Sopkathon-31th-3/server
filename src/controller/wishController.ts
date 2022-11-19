import { Request, Response } from "express";
import { wishService } from "../service";

const createWish = async ( req: Request, res: Response) => {
    const { wishItem, price, date } = req.body;

    if (!wishItem || !price || !date) {
        return res.status(400).json({ "status": 400, "success" : false, "message": "BAD_REQUEST" })
    }

    try {
        const data = await wishService.createWish(wishItem, price, date);
        res.status(200).json({ "status": 200, "success" : true, "message": "소원생성 성공", data })
    } catch (error) {
        res.status(500).json({ "status": 500, "success" : false, "message": "INTERNAL_SERVER_ERROR" })
    }
}

const wishController = {
    createWish
}

export default wishController;