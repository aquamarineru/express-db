import 'dotenv/config';
import express from "express";
import sqlRouter from "./routes/sqlRouter.js";

const server = express()

const port =  process.env.PORT || 8080;

server.get('/', (req, res) => res.status(200).json({hello: "Welcome to the Express and DBs recap!"}))
server.use('/sql', sqlRouter);


server.listen(port, () => console.log(`Server connected to port ${port}`))