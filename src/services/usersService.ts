import { where } from "firebase/firestore";
import dbRequest from "./dbRequest.ts"
import { auth } from "../firebase-config.ts";
import { months } from "../common/utils.ts";

export const getAllUsers=async()=>{
    let response = await dbRequest.queryDb({table:'Users',whereCondition:''})
   return response;
}
export const getCurrentUserData=async()=>{
    let response = await dbRequest.queryDb({table:'Users',whereCondition:[where("id", "==", sessionStorage.getItem('currentUser'))]})
   return response;
}

export const addNewUser=async(user)=>{
    let newId = auth.currentUser?.uid || ''
    await dbRequest.setDb(newId,'Users',{
       email: user.registerEmail,
       id: newId,
       joined: `${new Date().getFullYear()}-${months[new Date().getMonth()]}-${new Date().getDate()}`,
       name: user.registerName,
       role:'Administrator'
    })
}

export const updateUserRole=async(id,role)=>{
    await dbRequest.updateDb(id,'Users',{
        role:role
    })
}
export const updateUserName=async(id,name)=>{
    await dbRequest.updateDb(id,'Users',{
        name:name
    })
}
