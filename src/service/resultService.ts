import dayjs from "dayjs";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getResult = async () => {
  const foundItem = await prisma.food.findMany();
  const foundWish = await prisma.wish.findFirst({
    select: {
      date: true,
      price: true,
    },
  });

  const getDay = dayjs(foundWish.date);

  const today = new Date();
  const date1 = dayjs(today);
  const aaaaa = date1.diff(getDay, "day");

  const arr = [];

  for (let i = 0; i < 10; i++) {
    const d = foundWish.price / (aaaaa * foundItem[i].price);
    const a = d.toFixed(2);

    if (+a >= 1) {
      const result = Math.round(d);

      arr.push({ result });
    } else {
      arr.push({ a });
    }
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const item = {
      id: foundItem[i].id,
      foodName: foundItem[i].foodName,
      count: arr[i].result,
    };
    result.push(item);
  }

  return result;
};

const resultService = {
  getResult,
};

export default resultService;
