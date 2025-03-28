import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { checkDbConnection } from "./utils/mysql";

const app = express();
const PORT = process.env.PORT;

checkDbConnection();

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
