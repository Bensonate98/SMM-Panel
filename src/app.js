import express from "express";
import ejs from "ejs"
import methodOverride from "method-override";
import cookieParser from "cookie-parser";
import {port} from "./config/secrets.js";
import routes from "./routes/index.js";
const app = express();

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("./src/public"));
app.use(methodOverride("_method"));
app.use(cookieParser());
//register view engine
app.set("view engine", "ejs");
app.set('views', './src/views'); // Set views directory within src

// routes
app.use(routes);

app.listen(port, ()=>{
  console.log(`Server running at port ${port}`);
})
