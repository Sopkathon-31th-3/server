// import dayjs from "dayjs";
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// const getResult = async () => {
//   const foundItem = await prisma.food.findMany();
  
//   const foundWish = await prisma.wish.findFirst({
//     select: {
//       date: true,
//       price: true,
//     },
//   });
  

//   const getDay = dayjs(foundWish.date);
//   const today = new Date();
//   const date1 = dayjs(today);
//   const diffDay = date1.diff(getDay, "day");
  
//   const arr = [];

//   for (let i = 0; i < 10; i++) {
//     const dayOfFood = foundWish.price / (diffDay * foundItem[i].price);
//     const numToFixed = dayOfFood.toFixed(2);

//     if (+numToFixed >= 1) {
//       const result = Math.round(dayOfFood);

//       arr.push({ result });
//     } else {
//       arr.push({ numToFixed });
//     }
//   }

//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const item = {
//       id: foundItem[i].id,
//       foodName: foundItem[i].foodName,
//       count: arr[i].result,
//     };
//     result.push(item);
//   }

//   return result;
// };

// const resultService = {
//   getResult,
// };

// export default resultService;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const postResult = async (foodName: string, wishItemPrice: number) => {
//   //치킨 이미지, 계산 결과 값 보내주기~~!
  
//   const foodTable = await prisma.food.findMany();

//   for (let i = 0; )
// const data = {

// }

//   return 
  
  

  
// };

// const resultService = {
//   postResult,
// };

// export default resultService;

const postFood = async (foodName: string, wishItemPrice: number) => {

  const foods = await prisma.food.findMany({
    orderBy: [ //id별로 오름차순 정렬
      {
        id: "asc",
      },
    ],
  });
  
   
  if (!foods) {
      return null;
  }

  const new_foods = [];

  for(const food of foods) {
      new_foods.push({
          id: food.id,
          foodName : food.foodName,
          foodNum: Math.trunc(wishItemPrice / food.price), // 이게..되나?
          unit: food.unit, 
          imageURL: food.image_url
      })
  }

  return new_foods;
}

const foodService = {
  postFood
};

export default foodService;
