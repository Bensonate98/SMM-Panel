import { saveDeposit } from "../services/deposit.service.js";

export const viewDepositForm = (req, res)=>{
  return res.render("dashboard/deposit", {title: "Deposit Method"});
}

export const viewConfirmDepositForm = (req, res)=>{
  return res.render("dashboard/confirmDeposit", {title: "Confirm Deposit"});
}

export const initiateDeposit = async (req, res)=>{
  try{
    const userId = res.user.payload;
    const { amount } = req.body;
    await saveDeposit(amount, userId);
  }
  catch(err){
    console.log(err)
  } 
}