import crypto from "crypto";
import { paystackSecret } from "../config/secrets.js";
import { updateDepositStatus, fetchDeposit } from "../services/deposit.service.js";
import { saveTransaction, fetchTransaction } from "../services/transaction.service.js";
import  { updateUserBalance } from "../services/user.service.js"

export const processTransactionUsingWebhook = async (req, res)=>{
  try{
    const hash = crypto.createHmac('sha512', paystackSecret).update(JSON.stringify(req.body)).digest('hex');
    if (!hash == req.headers['x-paystack-signature']) return res.status(401).json({status: "error", message: "No payment signature"});
    const {event, data} = req.body;
    const reference = data.reference;
    const deposit = await fetchDeposit(reference);
    
    if(event === "charge.success" && data.status === "success"){
      await updateDepositStatus(reference, "completed");
      await updateUserBalance(deposit.userId, data.amount);
      await saveTransaction(reference, deposit.userId, data.amount);
    }
    return res.sendStatus(200);
  }
  catch(err){
      return res.render("dashboard/paymentFailure", {reference});
    }   
}

export const processTransaction = async (req, res)=>{
  const { reference } = req.query;
  try{
    const deposit = await fetchDeposit(reference);
    if(!deposit) return res.status(404).json("Invalid deposit");
    const { amount } = deposit;
    if(deposit?.status === "completed"){
      return res.render("dashboard/paymentSuccess", {reference, amount});
    }
    return res.render("dashboard/paymentProcessing", { amount });
  }
  catch(err){
    console.log("error handling callback", err);
    return res.render("dashboard/paymentFailure", {reference});
  }
}

export const displaySuccessPage = async (req, res)=>{
  const { reference, amount } = req.query;
  try{
    const transaction = await fetchTransaction(reference);

    if(!transaction || Math.abs(transaction.amount - parseFloat(amount)) > 0.01 ){
      return res.render("error/404");
    }
    return res.render("dashboard/paymentSuccess", { reference, amount })
  }
  catch(err){
    console.log(err);
    return res.render("dashboard/paymentFailure", { reference });
  }  
}


