import dbRequest from "./dbRequest.ts"

const getAllPosts=async()=>{
    let response = await dbRequest.queryDb({table:'Posts',whereCondition:''})
   return response;
}

export default getAllPosts;