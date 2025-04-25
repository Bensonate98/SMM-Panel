import axios from "axios"
import { paystackSecret, AppURL } from "../config/secrets.js";

export const initializePaystackTransaction = async (email, amount, reference)=>{
  return await axios.post("https://api.paystack.co/transaction/initialize", 
    { 
      email, 
      amount: amount * 100,
      reference,
      callback_url: `${AppURL}/paystack/callback`
    },
    {
      headers: {Authorization: `Bearer ${paystackSecret}`}
    }
  );
}

export const verifyPaystackTransaction = async (reference)=>{
 return await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, 
    {
      headers: {Authorization: `Bearer ${paystackSecret}`}
    }
  );
}