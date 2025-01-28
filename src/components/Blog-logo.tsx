import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogLogo = ()=>{
    const navigate = useNavigate();
    return(
        <h2 onClick={()=>{navigate('/')}} className="text-2xl font-bold cursor-pointer">blog.</h2>
    );
}

export default BlogLogo;