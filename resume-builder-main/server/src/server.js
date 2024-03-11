import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { config } from "./config/config.js";
import bodyParser from "body-parser";

import authRoutes from "./routers/auth.js";
import dashboardRoutes from "./routers/dashboard.js";
import verifyToken from "./utils/verify-token.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connect = async (url) => {
  await mongoose
    .connect(
      "mongodb+srv://kr75495:jSPijQRgjpYHotva@resume-builder-db.4thh8s1.mongodb.net/?retryWrites=true&w=majority&appName=resume-builder-db"
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useFindAndModify: false,
      //   useCreateIndex: true,
      // }
    )
    .then(() => {
      console.log("Database Connected...");
    })
    .catch((err) => {
      console.error(err);
    });
};

app.use("/api", authRoutes);
app.use("/api/dashboard", verifyToken, dashboardRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
export const start = async () => {
  console.log("-----------", config.DB_URL);
  await connect(config.DB_URL);

  app.listen(config.PORT, () => {
    console.log(`Server has started on port ${config.PORT}...`);
  });
};
