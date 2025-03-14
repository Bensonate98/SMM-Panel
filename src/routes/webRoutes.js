import express from "express"
const router = express.Router();

router.get("/", (req, res)=>{
  res.render("home/homepage");
});

router.get("/register", (req, res)=>{
  res.render("home/register", {error: null});
});

router.get("/login", (req, res)=>{
  res.render("home/login", {req, error: null});
});

router.get("/verify", (req, res)=>{
  res.render("home/verify", {error: null});
});

//Protected routes

router.get("/dashboard", (req, res)=>{
  res.render("dashboard/home")
})

export default router;