import { where } from "firebase/firestore";
import dbRequest from "./dbRequest.ts"

export const getAllUsers=async()=>{
    let response = await dbRequest.queryDb({table:'Users',whereCondition:''})
   return response;
}
export const getCurrentUserData=async()=>{
    let response = await dbRequest.queryDb({table:'Users',whereCondition:[where("id", "==", sessionStorage.getItem('currentUser'))]})
   return response;
}

