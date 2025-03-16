import { fetchUser } from "../services/user.service.js";

export const viewUserDasboard = async (req, res)=>{
  try{
    const userId = req.user.payload;
    const user = await fetchUser(userId);
    return res.render("dashboard/home", { user });
  }
  catch(err){
    console.log(err);
  } 
}