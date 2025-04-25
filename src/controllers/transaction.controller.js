import { fetchAllTransactions, getTotalTransactions } from "../services/transaction.service.js";

export const transactionHistory = async (req, res)=>{
  const page = parseInt(req.query.page) || 1;
    const batchSize = 10;
    const skip = (page - 1) * batchSize;
    const { userId } = req.user;
    try{
      const userTransactions = await fetchAllTransactions(userId, skip, batchSize);
      //get to total transaction count for pagination
      const totalTransactions = await getTotalTransactions(userId);
      const totalPages = Math.ceil(totalTransactions/batchSize);
      return res.render("dashboard/transactionHistory", { 
        userTransactions, 
        title: "Transactions", 
        totalTransactions, 
        totalPages, 
        currentPage: page 
      });
    }
    catch(err){
      return res.redirect("/internal-server-error");
    }
}