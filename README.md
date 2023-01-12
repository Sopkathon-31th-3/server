
## 👟🏃 SERVER 👟🏃

> 31th IN SOPT 솝커톤 3조 <br>
> 프로젝트 기간 : 2022.11.19 ~ 2022.11.20

🔔 서비스명 : 소원을 말(만)해봐

🔔 서비스 한줄소개 : 물가 상승에도 위시리스트 포기 못하는 당신을 위한 환율 계산기

<br>

### <strong> 🏃 Server 🏃 </strong>

| <img src="https://avatars.githubusercontent.com/u/82046935?v=4" width="200">|<img src="https://avatars.githubusercontent.com/u/86148470?v=4" width="200">|
| :-----------------------------------: | :-----------------------------------------------: |
|                김민욱                 |                      소예원                       |
| [ 🐸 coreminw ](https://github.com/coreminw) | [ 🐸 Soyewon ](https://github.com/Soyewon) |

<br>

### <strong> 🏃 Used 🏃 </strong>
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

## 🏃 Coding Convention 🏃
<br>
<details markdown="1">
<summary>네이밍</summary>

### DB

- DB 이름은 **UpperCamelCase**를 사용합니다.

<br>

### 함수, 변수, 타입
- 함수와 변수에는 **lowerCamelCase**를 사용합니다.
- 함수명은 동사로 시작합니다.
- 타입명은 **파스칼케이스**를 사용합니다.
  - interface이름에 I를 붙이지 않습니다.
- 기본 클래스 파일을 생성하거나 컴포넌트를 생성할 때는 약어 규칙에 따라 네이밍합니다.  

<br>

### 변수 네이밍

- `사진` → photo
- `유저` → user 
- `배열을 담은 변수`→ ~s(복수형)
- `상태` → status 

---
</details>

<br>

## ✉️ Branch Strategy

```
[CHORE] 코드 수정, 내부 파일 수정 
[FEAT] 새로운 기능 구현 
[ADD] Feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 시, 에셋 추가
[HOTFIX] issue나, QA에서 급한 버그 수정에 사용
[FIX] 버그, 오류 해결
[REMOVE] 쓸모없는 코드 삭제 
[DOCS] README나 WIKI 등의 문서 개정
[MOVE] 프로젝트 내 파일이나 코드의 이동 
[RENAME] 파일 이름, 변수명, 함수명 변경이 있을 때 사용합니다. 
[REFACTOR] 전면 수정이 있을 때 사용합니다 
```
<br>

## 🗂 프로젝트 폴더링

```jsx

📦 controllers               
 ┣ 📜 index.ts
 ┗ 📜 Controller.ts

📦 interfaces                
 ┗ 📂 common
 ┃ ┣ 📜 Dto.ts
 ┗ 📂 hihi
   ┣ 📜 BoardInfo.ts

📦 constants                  
 ┣ 📜 index.ts
 ┣ 📜 responseMessage.ts
 ┗ 📜 reponse.ts
 ┗ 📜 statusCode.ts

📦 router                   
 ┣ 📜 router.ts
 ┗ 📜 index.ts

📦 services                  
 ┣ 📜 service.ts
 ┗ 📜 index.ts
```

## ✨ Github Management
<br>

<details>
<summary> ✨ Gitflow ✨ </summary>
<div markdown="1">  

```
1. Issue를 생성한다.
2. 깃 컨벤션에 맞게 Branch를 생성한다.
3. Add - Commit - Push - Pull Request 의 과정을 거친다.
4. Pull Request가 작성되면 작성자 이외의 다른 팀원이 Code Review를 한다.
5. Code Review가 완료되면 Pull Request 작성자가 develop Branch로 merge 한다.
6. merge된 Branch는 삭제한다.
7. 종료된 Issue와 Pull Request의 Label과 Project를 관리한다.
```
	
### 🌴 브랜치
---
#### 📌 브랜치 단위
- 브랜치 단위 = 이슈 단위 = PR단위

#### 📌 브랜치명
- 브랜치는 뷰 단위로 생성합니다.
- 브랜치 규칙 → feature/#이슈번호-탭-기능간략설명
- `ex) feature/#1-postLike`
- 탭이름 - yewon, minwook 
- 공통적인 것 작업 - Global
    - feature/chore/fix/network

<br>
	
### 💡 이슈, PR 규칙
---
	
#### 📌 Issue명 = PR명
- [FEAT] - 기능 구현
- [FIX] - 버그 수정
- [REFACTOR] - 코드 리팩토링(결과물은 같지만 코드의 향상)
- [CHORE] - 수정
- [ADD] - 세팅 및 라이브러리 추가

</details>

<br>

### <strong> 🏃 APIs 🏃 </strong>
|   EndPoint   |               detail               | developer | done |
| :------: | :--------------------------------: | :-------: |:--: |
|   RESULT  |       결과 페이지 정보      |   민욱    |    |
|   WISH  |       소원 정보 받기      |   예원    |    |
|   FOOD  |       좋아하는 음식 정보 받기      |   민욱    |    |
<br>

<br>

## <strong> API 명세서</strong>

[API 명세서](https://golden-rib-2f1.notion.site/99b4f3e386314b808898823ae5e2c343?v=f7b701095aca41be934cb6ac876ee272)

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
