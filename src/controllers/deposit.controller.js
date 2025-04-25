import { saveDeposit, fetchDeposit, getDepositHistory, getTotalDeposit } from "../services/deposit.service.js";
import { initializePaystackTransaction } from "../services/payment.service.js"

export const viewDepositForm = (req, res)=>{
  return res.render("dashboard/deposit", {title: "Deposit Method"});
}

export const viewConfirmDepositForm = (req, res)=>{
  return res.render("dashboard/confirmDeposit", {title: "Confirm Deposit"});
}

export const initiateDeposit = async (req, res)=>{
  const { userId, email } = req.user;
  const { amount } = req.body;
  try{
    const deposit = await saveDeposit(amount, userId);
    const transactionResponse =  await initializePaystackTransaction(email, amount, deposit.reference);
    res.redirect(transactionResponse.data.data.authorization_url);
  }
  catch(err){
    return res.redirect("/internal-server-error");
  } 
}

export const depositStatus = async (req, res)=>{
  const { reference } = req.query;
  try{
    const deposit = await fetchDeposit(reference);
  
  if (!deposit) {
      return res.status(404).json({ error: 'Transaction not found' });
  }
  
  return res.status(200).json({
      status: deposit.status,
      amount: deposit.amount
  });
  }catch(err){
    console.log(err)
  }
};

//Gets a user's depsosit history
export const depositHistory = async (req, res)=>{
  const page = parseInt(req.query.page) || 1;
  const batchSize = 10;
  const skip = (page - 1) * batchSize;
  const { userId } = req.user;
  try{
    const userDeposits = await getDepositHistory(userId, skip, batchSize);
    //get to total deposits count for pagination
    const totalDeposits = await getTotalDeposit(userId);
    const totalPages = Math.ceil(totalDeposits/batchSize);
    return res.render("dashboard/depositHistory", { 
      userDeposits, 
      title: "Deposit History", 
      totalDeposits, 
      totalPages, 
      currentPage: page 
    });
  }
  catch(err){
    return res.redirect("/internal-server-error");
  }
}