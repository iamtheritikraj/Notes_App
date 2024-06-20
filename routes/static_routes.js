// THIS STATIC.ROUTES.JS FILE CONTAINS THE CODE THAT RENDER VIEWS TO THE BROWSER
import express from "express";
import { authstatus } from "../middlewares/authstatus.js";
import { authvalid } from "../middlewares/authvalid.js";

const router = express.Router();

// RENDER HOME PAGE TO "/" ROOT PATH
router.get("/", authstatus, async (req, res) => {
  res.render("home", { authvalid: req.isAuthenticated });
});

router.get("/sign-in",authstatus,async (req,res) => {
  res.render("signin");
});

router.get("/sign-up",authstatus,async (req,res) => {
  res.render("signup");
});
router.get("/about",authstatus,async (req,res) => {
  res.render("about",{authvalid:req.isAuthenticated});
});
router.get("/faq",authstatus,async (req,res) => {
  res.render("faq",{authvalid:req.isAuthenticated});
});


export default router;
