import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.tsx";
import MenuToggleButton from "./MenuToggleButton.tsx";
import BlogLogo from "./Blog-logo.tsx";

const Header = ({ desktop }) => {
  const { state }: any = useContext(AppContext);

  return (
    <header
      className={`bg-white border-r
        ${desktop?'hidden lg:flex':'block lg:hidden '}
        z-20 h-[75px] border-b border-lightGray flex items-center justify-between px-[3%] sticky xl:relative top-0 
        `}
    >
      <BlogLogo />
      {/* <button
        onClick={() => {
          console.log(state);
        }}
      >
        click
      </button> */}
      <MenuToggleButton />
    </header>
  );
};

export default Header;
