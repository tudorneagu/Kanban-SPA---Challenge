import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { PrismaClient } from "@prisma/client";
import router from "./app/routes/router.js";

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json()); // To parse JSON bodies

// Routes
app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
