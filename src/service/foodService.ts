const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getFood = async () => {
  const data = await prisma.food.findMany();
  return data;
};

const foodService ={
  getFood
}

export default foodService;