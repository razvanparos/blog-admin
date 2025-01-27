import React from 'react';
import { Link } from 'react-router-dom';
import SideBarActions from '../context/actions/sidebar-acions.ts';

interface SidebarRowPropsType {
    name:string,
    icon:any,
    count?:number,
    path:any
}

const SidebarRow = ({name,icon,count,path}:SidebarRowPropsType)=>{
    const toggleSidebar=()=>{
        if(window.innerWidth<1024){
            SideBarActions.toggleSidebar(false)
        }
    }

    return(
        <Link onClick={toggleSidebar} to={path} className="p-3 flex items-center text-lg gap-x-2 cursor-pointer">
            {icon}
            <p className='w-full '>{name}</p>
            {
                count? count>0?<span className='text-lighGray font-semibold'>{count}</span>:'':''
            }

        </Link>
    );
}

export default SidebarRow;