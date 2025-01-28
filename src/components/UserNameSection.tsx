import React,{useContext} from 'react';
import { PiUserCircleDuotone } from "react-icons/pi";
import { MdNotifications } from "react-icons/md";
import { AppContext } from '../context/AppContext.tsx';

const UserNameSection = ()=>{
    const {state}=useContext(AppContext)
    const {userData}=state;
    return(
        <section className="flex items-center justify-between">
            <PiUserCircleDuotone className='text-6xl'/>
            <div className='w-full px-4 lg:px-2'>
                <p className="text-darkBlue text-lg">{userData[0]?.name}</p>
                <p className="text-lighGray text-sm ">{userData[0]?.role}</p>
            </div>
            <MdNotifications className='text-4xl text-slate-500'/>
        </section>
    );
}

export default UserNameSection;