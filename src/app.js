import express from "express";
import ejs from "ejs"
import {port} from "./config/secrets.js";
import webRoutes from "./routes/webRoutes.js"
import authRoutes from "./routes/authRoutes.js"
const app = express();

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("./src/public"));
//register view engine
app.set("view engine", "ejs");
app.set('views', './src/views'); // Set views directory within src

// routes
app.use(webRoutes);
app.use("/auth", authRoutes);

app.listen(port, ()=>{
  console.log(`Server running at port ${port}`);
})
