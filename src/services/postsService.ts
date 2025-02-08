import { orderBy, where } from "firebase/firestore";
import dbRequest from "./dbRequest.ts"

export const getAllPosts=async()=>{
    let response = await dbRequest.queryDb({
        table:'Posts',
        orderBy:orderBy("date", "desc"),
        whereCondition:''
    })
   return response;
}
export const getCurrentUserPosts=async()=>{
    let response = await dbRequest.queryDb({
        table:'Posts',
        orderBy:orderBy("date", "desc"),
        whereCondition:[where('authorId','==',localStorage.getItem('currentUser'))]
    })
   return response;
}

export const saveNewPost=async(post)=>{
    let newId = "id" + Math.random().toString(16).slice(2)
    await dbRequest.setDb(newId,'Posts',{
        author: post.author,
        authorId: localStorage.getItem('currentUser'),
        content: post.content,
        date: post.date,
        id: newId,
        status: 'Published',
        title: post.title,
        comments: []
    })
}

export const updatePost=async(post)=>{
    await dbRequest.updateDb(post.id,"Posts",{
        title:post.title,
        author: post.author,
        content: post.content,
        date: post.date,
    });
}
export const updatePostComments=async(id,comments)=>{
    await dbRequest.updateDb(id,"Posts",{
        comments: comments
    });
}

export const updatePostStatus=async(id,status)=>{
    await dbRequest.updateDb(id,"Posts",{
        status:status,
    });
}
export const removePost=async(id)=>{
    await dbRequest.removeFromDb(id,'Posts')
}