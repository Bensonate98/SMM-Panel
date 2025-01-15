import express from "express";
import {port} from "./utils/secrets.js";
const app = express();

app.listen(port, ()=>{
  console.log(`Server running at port ${port}`);
})
