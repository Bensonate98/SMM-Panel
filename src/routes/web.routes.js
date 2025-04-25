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

//Error pages
router.get("/internal-server-error", (req, res)=>{
  res.render("error/500");
});
router.get("/page-not-found", (req, res)=>{
  res.render("error/404");
});

router.get("/unauthorized-access", (req, res)=>{
  res.render("error/403");
});

export default router;