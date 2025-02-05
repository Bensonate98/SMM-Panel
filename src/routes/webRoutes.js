import express from "express"
const router = express.Router();

router.get("/", (req, res)=>{
  res.render("home/homepage");
});

router.get("/register", (req, res)=>{
  res.render("home/register", {error: null});
});

router.get("/login", (req, res)=>{
  res.render("home/login");
});

export default router;