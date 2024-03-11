// config.js
import env from "dotenv";
env.config();
export const config = {
  PORT: process.env.PORT || 8000,
  DB_URL:
    "mongodb+srv://kr75495:jSPijQRgjpYHotva@resume-builder-db.4thh8s1.mongodb.net/?retryWrites=true&w=majority&appName=resume-builder-db",
  JWT_SECRET: "huzaifa",
};
