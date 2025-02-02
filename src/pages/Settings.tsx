import React,{useState,useContext} from 'react';
import FormRow from '../components/FormRow.tsx';
import { AppContext } from '../context/AppContext.tsx';
import ButtonComponent from '../components/ButtonComponent.tsx';
import { getCurrentUserData, updateUserName } from '../services/usersService.ts';
import NotificationActions from '../context/actions/notification-actions.ts';
import UsersActions from '../context/actions/users-actions.ts';

const Settings = ()=>{
    const {state}=useContext(AppContext)
    const {userData}=state
    const[settingsName,setSettingsName]=useState(userData[0]?.name)
    const[loading,setLoading]=useState(false)

    const handleUpdateName=async()=>{
        if(settingsName){
            setLoading(true)
            await updateUserName(userData[0].id,settingsName)
            let newUserData = (await getCurrentUserData()) as any;
            UsersActions.setUserData(newUserData);
            setLoading(false)
            NotificationActions.showNotification('Name updated!','normal')
        }else NotificationActions.showNotification('Name cannot be empty','warning')
        
    }
    return(
        <div className="w-full p-2 lg:p-4 lg:flex lg:flex-col overflow-y-scroll h-[calc(100vh-75px)] md:h-full gap-y-4 max-w-[600px]">
            <h2 className="text-lg md:text-2xl ">Settings</h2>
            <FormRow type={'text'} labelText='Name' value={settingsName} onChangeFunction={(e)=>{setSettingsName(e.target.value)}}/>
            <ButtonComponent text='Update Name' type='primary' onClickFunction={handleUpdateName} loader={loading}/>
      </div>
    );
}

export default Settings;