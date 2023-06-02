import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import likeMeRouter from "./routes/likeme.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", likeMeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Funcionando en: http://localhost:${PORT}/api`);
});
