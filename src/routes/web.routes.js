import express from "express"
const router = express.Router();

router.get("/", (req, res)=>{
  res.render("home/homepage");
});

router.get("/register", (req, res)=>{
  res.render("home/register", {error: null, title: "Register"});
});

router.get("/login", (req, res)=>{
  res.render("home/login", {req, error: null, title: "Login"});
});

export default router;