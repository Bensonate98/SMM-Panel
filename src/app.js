import express from "express";
import ejs from "ejs"
import methodOverride from "method-override";
import {port} from "./config/secrets.js";
import webRoutes from "./routes/web.routes.js"
import authRoutes from "./routes/auth.routes.js"
const app = express();

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("./src/public"));
app.use(methodOverride("_method"));
//register view engine
app.set("view engine", "ejs");
app.set('views', './src/views'); // Set views directory within src

// routes
app.use(webRoutes);
app.use("/auth", authRoutes);

app.listen(port, ()=>{
  console.log(`Server running at port ${port}`);
})
