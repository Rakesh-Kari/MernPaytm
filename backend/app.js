import express from "express";
import mainRouter from "./routes/index.js";
import cors from "cors";
import jwt from "jsonwebtoken";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);
