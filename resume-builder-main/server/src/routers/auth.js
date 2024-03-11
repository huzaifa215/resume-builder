import express from "express";
import {
  Sign,
  Login,
  ForgotPassword,
  ResetPassword,
  Check,
} from "../controllers/auth.js";

const router = express.Router();

router.get("/", Check);
router.post("/signup", Sign);
router.post("/login", Login);

router.post("/password/forgot", ForgotPassword);
router.post("/password/reset", ResetPassword);

export default router;
