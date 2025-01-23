import React from 'react';

const SidebarRow = ({name,icon,count})=>{
    return(
        <section className="p-3 flex items-center text-lg gap-x-2 cursor-pointer">
            {icon}
            <p className='w-full'>{name}</p>
            <span>{count}</span>
        </section>
    );
}

export default SidebarRow;