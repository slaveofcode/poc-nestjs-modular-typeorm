# POC of Modular NestJs Project Using Typeorm

## Step

#### Create empty database

Create new database, then configure these related entity for database configuration

1. go to `main-project/src/app.module.ts` to update database connection for **example** module. 
2. create file `main-project/.env`, based on `.env.example` to update database connection for **main-project** module

#### Build or Running Example Module

1. `cd example`
2. `npm i`
3. `npm run build` or `npm run start:dev` to generate `dist` sources

#### Include & Running Example from Main Project

1. `cd main-project`
2. `npm i`
3. `npm i ../example`
4. `npm run start:dev` to run the server


## Test

#### Call module "example" from "main-project"

```curl
curl http://localhost:3000/todo 
```

#### Call service from "example" module (if you running it as a server too)

```curl
curl http://localhost:6000/todo 
```