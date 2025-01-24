import React from 'react';
import { PiUserCircleDuotone } from "react-icons/pi";
import { MdNotifications } from "react-icons/md";

const UserNameSection = ()=>{
    return(
        <section className="flex items-center justify-between">
            <PiUserCircleDuotone className='text-6xl'/>
            <div className='w-full px-4 lg:px-2'>
                <p className="text-darkBlue text-lg">Austin Robertson</p>
                <p className="text-lighGray text-sm ">Marketing Administrator</p>
            </div>
            <MdNotifications className='text-4xl text-slate-500'/>
        </section>
    );
}

export default UserNameSection;