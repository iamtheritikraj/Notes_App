import express from "express";
import {
  userLogout,
  userSignin,
  userSignup,
} from "../controllers/users_controllers.js";

const router = express.Router();

// 👉 SIGN-UP USER ROUTE      /users/sign-up
router.post("/sign-up", userSignup);

// 👉 SIGN-IN USER ROUTE      /users/sign-in
router.post("/sign-in", userSignin);

// 👉 LOGOUT USER ROUTE      /users/logout
router.post("/logout", userLogout);

export default router;
