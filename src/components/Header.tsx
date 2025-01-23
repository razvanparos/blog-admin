import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.tsx";
import MenuToggleButton from "./MenuToggleButton.tsx";

const Header = () => {
  const {state}:any = useContext(AppContext);

  return (
    <header className="z-20 h-[75px] border-b border-lightGray flex items-center justify-between px-[3%] sticky xl:relative top-0 bg-white">
      <h2 className="text-2xl font-bold">blog.</h2>
      {/* <button onClick={()=>{console.log(state)}}>click</button> */}
      <MenuToggleButton/>
    </header>
  );
};

export default Header;
