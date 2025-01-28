import React,{useState} from "react";
import BlogLogo from "../components/Blog-logo.tsx";
import FormRow from "../components/FormRow.tsx";
import ButtonComponent from "../components/ButtonComponent.tsx";
import LinkComponent from "../components/LinkComponent.tsx";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService.ts";

const RegisterPage = () => {
  const navigate = useNavigate();
  const initialRegisterState={
    registerName:'',
    registerEmail:'',
    registerPassword:'',
    registerError:'',
    loading:false
  }
  const [registerState,setRegisterState]=useState(initialRegisterState)
  
  const changeRegisterState = (fieldname,value)=>{
    setRegisterState((prevState)=>({
      ...prevState,
      [fieldname]:value
    }))
  } 

  const handleRegister = async (e) => {
    e.preventDefault();
    changeRegisterState('loading',true)
    try{
      await registerUser(registerState.registerName, registerState.registerEmail, registerState.registerPassword);
      navigate('/login')
    }catch(error){
      changeRegisterState('registerError',error)
      changeRegisterState('loading',true)
    }
    
    changeRegisterState('loading',false)
  };

  return (
    <main className="flex justify-center">
    <form onSubmit={handleRegister} className='flex flex-col py-6 px-2 gap-y-4 w-full max-w-[500px]'>
      <BlogLogo/>
      <FormRow type='text' placeholder={'Name'} value={registerState.registerName} onChangeFunction={(e)=>changeRegisterState('registerName',e.target.value)}/> 
      <FormRow type='text' placeholder={'Email address'} value={registerState.registerEmail} onChangeFunction={(e)=>changeRegisterState('registerEmail',e.target.value)}/> 
      <FormRow type='password' placeholder={'Password'} value={registerState.registerPassword} onChangeFunction={(e)=>changeRegisterState('registerPassword',e.target.value)}/> 
      <p className='text-red-500'>{registerState.registerError}</p>
      <ButtonComponent text={'Register'} type='primary' loader={registerState.loading}/>
      <LinkComponent text={'Already have an account?'} redirectTo={'login'}/>
    </form>
  </main>
  );
};

export default RegisterPage;
