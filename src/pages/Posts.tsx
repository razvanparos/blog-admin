import React,{useEffect} from 'react';
import getAllPosts from '../services/postsService.ts';

const Posts = ()=>{

    useEffect(()=>{
       getAllPosts();
    },[])

    return(
        <div className="w-full p-4 flex flex-wrap gap-2 overflow-y-scroll max-h-[calc(100vh-75px)]">
            {/* <SearchbarComponent></SearchbarComponent> */}
            <p>Posts</p>
         
        </div>
    );
}

export default Posts;