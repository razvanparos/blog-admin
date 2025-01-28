import { orderBy } from "firebase/firestore";
import dbRequest from "./dbRequest.ts"

const getAllPosts=async()=>{
    let response = await dbRequest.queryDb({
        table:'Posts',
        orderBy:orderBy("date", "desc"),
        whereCondition:''
    })
   return response;
}

export default getAllPosts;