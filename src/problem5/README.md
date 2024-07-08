## Script:

- npm install
- npm start

## Nodejs Typescript project

Follow these steps to create a new nodejs project with Typescript

- npm init
- tsc --init
- configure tsconfig.json file:
  - "outDir": "./build", ( Redirect output structure to the directory. )
  - "rootDir": "./src", ( Specify the root directory of input files. Use to control the output directory structure with outDir.)

## How to build and run this project

- Install using Docker Compose [**Recommended Method**]

  - Clone this repo.
  - Make a copy of **.env.example** file to **.env**.
  - Install Docker and Docker Compose. [Find Instructions Here](https://docs.docker.com/install/).
  - Execute `docker-compose up -d` in terminal from the repo directory.
  - You will be able to access the api from http://localhost:5000
  - Run Tests: `docker exec -t app npm test`
  - _If having any issue_ then make sure 5000 port is not occupied else provide a different port in **.env** file.
  - _If having any issue_ then make sure 27017 port is not occupied else provide a different port in **.env** file.

- Install Without Docker [**2nd Method**]
  - Install MongoDB on your local.
  - Do steps 1 to 5 as listed for **Install using Docker Compose**.
  - Change the `DB_HOST` to `localhost` in **.env** and **tests/.env.test** files.
  - Execute `npm start` and You will be able to access the API from http://localhost:5000

## Mongodb

Mongodb options you can use a local or a remote database:

- Local
- [Mongodb Atals](https://account.mongodb.com/account/login)

## Endponts:

### User:

- create user : localhost:5000/user/
- get user : localhost:5000/user/userId
- update user : localhost:5000/user/

### Posts:

- create post : localhost:5000/post/
- get all post : localhost:5000/post/
- get post : localhost:5000/post/postId
- delete post : localhost:5000/post/postId
- update post : localhost:5000/post/
