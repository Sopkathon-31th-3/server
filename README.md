
## ππ SERVER ππ

> 31th IN SOPT μμ»€ν€ 3μ‘° <br>
> νλ‘μ νΈ κΈ°κ° : 2022.11.19 ~ 2022.11.20

π μλΉμ€λͺ : μμμ λ§(λ§)ν΄λ΄

π μλΉμ€ νμ€μκ° : λ¬Όκ° μμΉμλ μμλ¦¬μ€νΈ ν¬κΈ° λͺ»νλ λΉμ μ μν νμ¨ κ³μ°κΈ°

<br>

### <strong> π Server π </strong>

| <img src="https://avatars.githubusercontent.com/u/82046935?v=4" width="200">|<img src="https://avatars.githubusercontent.com/u/86148470?v=4" width="200">|
| :-----------------------------------: | :-----------------------------------------------: |
|                κΉλ―Όμ±                 |                      μμμ                       |
| [ πΈ coreminw ](https://github.com/coreminw) | [ πΈ yujindonut ](https://github.com/Soyewon) |

<br>

### <strong> π Used π </strong>
<br>
<p>
<img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white"/>
<img alt="Prisma" src="https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white"/>
<img alt="AWS" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/><br>
<img alt="Prettier" src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black"/>
<img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white"/>
</p>
  
<br>

## π Coding Convention π
<br>
<details markdown="1">
<summary>λ€μ΄λ°</summary>

### DB

- DB μ΄λ¦μ **UpperCamelCase**λ₯Ό μ¬μ©ν©λλ€.

<br>

### ν¨μ, λ³μ, νμ
- ν¨μμ λ³μμλ **lowerCamelCase**λ₯Ό μ¬μ©ν©λλ€.
- ν¨μλͺμ λμ¬λ‘ μμν©λλ€.
- νμλͺμ **νμ€μΉΌμΌμ΄μ€**λ₯Ό μ¬μ©ν©λλ€.
  - interfaceμ΄λ¦μ Iλ₯Ό λΆμ΄μ§ μμ΅λλ€.
- κΈ°λ³Έ ν΄λμ€ νμΌμ μμ±νκ±°λ μ»΄ν¬λνΈλ₯Ό μμ±ν  λλ μ½μ΄ κ·μΉμ λ°λΌ λ€μ΄λ°ν©λλ€.  

<br>

### λ³μ λ€μ΄λ°

- `μ¬μ§` β photo
- `μ μ ` β user 
- `λ°°μ΄μ λ΄μ λ³μ`β ~s(λ³΅μν)
- `μν` β status 

---
</details>

<br>

## βοΈ Branch Strategy

```
[CHORE] μ½λ μμ , λ΄λΆ νμΌ μμ  
[FEAT] μλ‘μ΄ κΈ°λ₯ κ΅¬ν 
[ADD] Feat μ΄μΈμ λΆμμ μΈ μ½λ μΆκ°, λΌμ΄λΈλ¬λ¦¬ μΆκ°, μλ‘μ΄ νμΌ μμ± μ, μμ μΆκ°
[HOTFIX] issueλ, QAμμ κΈν λ²κ·Έ μμ μ μ¬μ©
[FIX] λ²κ·Έ, μ€λ₯ ν΄κ²°
[REMOVE] μΈλͺ¨μλ μ½λ μ­μ  
[DOCS] READMEλ WIKI λ±μ λ¬Έμ κ°μ 
[MOVE] νλ‘μ νΈ λ΄ νμΌμ΄λ μ½λμ μ΄λ 
[RENAME] νμΌ μ΄λ¦, λ³μλͺ, ν¨μλͺ λ³κ²½μ΄ μμ λ μ¬μ©ν©λλ€. 
[REFACTOR] μ λ©΄ μμ μ΄ μμ λ μ¬μ©ν©λλ€ 
```
<br>

## πΒ νλ‘μ νΈ ν΄λλ§

```jsx

π¦ controllers               
 β£ π index.ts
 β π Controller.ts

π¦ interfaces                
 β π common
 β β£ π Dto.ts
 β π hihi
   β£ π BoardInfo.ts

π¦ constants                  
 β£ π index.ts
 β£ π responseMessage.ts
 β π reponse.ts
 β π statusCode.ts

π¦ router                   
 β£ π router.ts
 β π index.ts

π¦ services                  
 β£ π service.ts
 β π index.ts
```

## β¨ Github Management
<br>

<details>
<summary> β¨ Gitflow β¨ </summary>
<div markdown="1">  

```
1. Issueλ₯Ό μμ±νλ€.
2. κΉ μ»¨λ²€μμ λ§κ² Branchλ₯Ό μμ±νλ€.
3. Add - Commit - Push - Pull Request μ κ³Όμ μ κ±°μΉλ€.
4. Pull Requestκ° μμ±λλ©΄ μμ±μ μ΄μΈμ λ€λ₯Έ νμμ΄ Code Reviewλ₯Ό νλ€.
5. Code Reviewκ° μλ£λλ©΄ Pull Request μμ±μκ° develop Branchλ‘ merge νλ€.
6. mergeλ Branchλ μ­μ νλ€.
7. μ’λ£λ Issueμ Pull Requestμ Labelκ³Ό Projectλ₯Ό κ΄λ¦¬νλ€.
```
	
### π΄ λΈλμΉ
---
#### π λΈλμΉ λ¨μ
- λΈλμΉ λ¨μ = μ΄μ λ¨μ = PRλ¨μ

#### π λΈλμΉλͺ
- λΈλμΉλ λ·° λ¨μλ‘ μμ±ν©λλ€.
- λΈλμΉ κ·μΉ β feature/#μ΄μλ²νΈ-ν­-κΈ°λ₯κ°λ΅μ€λͺ
- `ex) feature/#1-postLike`
- ν­μ΄λ¦ - yewon, minwook 
- κ³΅ν΅μ μΈ κ² μμ - Global
    - feature/chore/fix/network

<br>
	
### π‘ μ΄μ, PR κ·μΉ
---
	
#### π Issueλͺ = PRλͺ
- [FEAT] - κΈ°λ₯ κ΅¬ν
- [FIX] - λ²κ·Έ μμ 
- [REFACTOR] - μ½λ λ¦¬ν©ν λ§(κ²°κ³Όλ¬Όμ κ°μ§λ§ μ½λμ ν₯μ)
- [CHORE] - μμ 
- [ADD] - μΈν λ° λΌμ΄λΈλ¬λ¦¬ μΆκ°

</details>

<br>

### <strong> π APIs π </strong>
|   EndPoint   |               detail               | developer | done |
| :------: | :--------------------------------: | :-------: |:--: |
|   RESULT  |       κ²°κ³Ό νμ΄μ§ μ λ³΄      |   λ―Όμ±    |    |
|   WISH  |       μμ μ λ³΄ λ°κΈ°      |   μμ    |    |
|   FOOD  |       μ’μνλ μμ μ λ³΄ λ°κΈ°      |   λ―Όμ±    |    |
<br>

<br>

## <strong> API λͺμΈμ</strong>

[API λͺμΈμ](https://golden-rib-2f1.notion.site/99b4f3e386314b808898823ae5e2c343?v=f7b701095aca41be934cb6ac876ee272)

<br>

<br>

## <strong> package.json </strong>


```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist",
    "lint": "yarn run lint-prettier && yarn run lint-eslint",
    "lint-eslint": "eslint --ignore-path .gitignore src/**/*ts --fix",
    "lint-prettier": "prettier --write \"src/**/*.(ts|tsx)\""
  },
  "lint-staged": {
    "src/**/*.(ts|tsx)": [
      "yarn lint"
    ]
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.13",
    "@types/jsonwebtoken": "^8.5.8",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^17.0.25",
    "eslint": "^8.16.0",
    "nodemon": "^2.0.15",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "@typescript-eslint/eslint-plugin": "^5.9.0",
    "@typescript-eslint/parser": "^5.9.0",
    "bcryptjs": "^2.4.3",
    "dayjs": "^1.11.6",
    "dotenv": "^16.0.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "express": "^4.17.3",
    "express-validator": "^6.14.0",
    "jsonwebtoken": "^8.5.1",
    "lint-staged": "^12.1.5",
    "mongoose": "^6.3.1",
    "prettier": "^2.5.1",
    "prisma": "^4.6.1"
  }
}
```


<br>

<br>

## <strong> schema.prisma </strong>


```json
{
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model food {
  id       Int    @id(map: "food_pk") @unique(map: "food_id_uindex")
  foodName String @db.VarChar(20)
  price    Int
}

model wish {
  id       Int      @id(map: "wish_pk") @unique @default(autoincrement())
  wishItem String   @db.VarChar(30)
  price    Int
  date     DateTime @db.Timestamp(6)
}

}
```



<br>

<br>


## <strong> ERD </strong>

<img width="261" alt="KakaoTalk_Photo_2022-11-20-06-52-52" src="https://user-images.githubusercontent.com/86148470/202872913-6d4f3b3c-6b6d-4224-a649-b181776504b2.png">

<br>

<br>

## <strong> server architecture </strong>
	
<img width="796" alt="KakaoTalk_Photo_2022-11-20-06-59-44" src="https://user-images.githubusercontent.com/86148470/202873115-c069cc26-3cd6-4fa9-8c68-98a7306c1e2e.png">
