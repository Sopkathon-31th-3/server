

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");
moment.suppressDeprecationWarnings = true;
import dayjs from "dayjs";

const createWish = async(wishItem: string, price: number, date: Date ) => {
    try{
   const d = dayjs(date);
    // console.log(d.toDate())
    const data = await prisma.wish.create({
        data: {
            wishItem,
            price,
            date: d.toDate(),
        }
    });

    const da = {
        wishItem,
        price,
        date: dayjs(date).format("YYYY-MM-DD")
    }
    
    return da;
} catch(error){
    console.log(error)
}
}

const wishService ={
    createWish
}

export default wishService;