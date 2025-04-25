import { fetchUser, updateUserData, updateUserPassword } from "../services/user.service.js";

export const viewUserDasboard = async (req, res)=>{
  try{
    const { userId } = req.user;
    const { balance, firstname } = await fetchUser(userId);
    const formatter = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    });
   const walletBalance = formatter.format(balance);
    return res.render("dashboard/home", { walletBalance, firstname, title: "Dashboard" });
  }
  catch(err){
    return res.redirect("/internal-server-error");
  } 
}

export const userProfileData = async (req, res)=>{
  try{
    const { userId } = req.user;
    const { firstname, lastname, email } = await fetchUser(userId);
    return res.render("dashboard/profileSetting", { 
      firstname, 
      lastname, 
      email, 
      title: "Profile Setting" 
    });
  }
  catch(err){
    return res.redirect("/internal-server-error");
  }
}

export const updateUserProfile = async (req, res)=>{
  try{
    const { userId } = req.user;
    const { firstname, lastname, email } = req.profileData
    const user = await updateUserData(userId, firstname, lastname, email);
    return res.status(200).json({ success: true, message: "Profile updated successfully", data: {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    }});
  }
  catch(err){
    return res.redirect("/internal-server-error");
  }
}

export const changePasswordForm = (req, res)=>{
  return res.render("dashboard/changePassword", { title: "Change Password"});
}

export const updatePassword = async (req, res)=>{
  const { password, newPassword } = req.passwordData;
  const { userId } = req.user;
  console.log(req.user);
  try{
    await updateUserPassword(userId, password, newPassword);
    return res.status(200).json({
      success: true,
      message: "Password updated sucessfully"
    });  
  }
  catch(err){
    if(err.message === "incorrect password" || err.message === "invalid user"){
      return res.status(400).json({success: false, message: err.message} )
    }
    return res.redirect("/internal-server-error");
  }
}