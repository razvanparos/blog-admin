import React,{useContext} from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { AppContext } from '../context/AppContext.tsx';
import PostsActions from '../context/actions/posts-actions.ts';

const SearchBarComponent = ()=>{
    const {state}=useContext(AppContext)
    const {postsSearch}=state;

    const onPostsSearchChange=(input)=>{
        PostsActions.setPostsSearch(input)
    }

    return(
        <div className="border w-full lg:w-[35%] rounded-lg flex items-center px-4">
            <IoSearchOutline className='text-xl'/>
            <input value={postsSearch} onChange={(e)=>{onPostsSearchChange(e.target.value)}} type="text" className='outline-none px-2 py-2 rounded-lg w-full' placeholder={'Search...'}/>
        </div>
        
    );
}

export default SearchBarComponent;