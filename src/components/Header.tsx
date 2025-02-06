import React from "react";
import MenuToggleButton from "./MenuToggleButton.tsx";
import BlogLogo from "./Blog-logo.tsx";

const Header = () => {

  return (
    <header
      className={`bg-white border-r
        w-full
        z-40 h-[75px] border-b border-lightGray flex items-center justify-between px-[3%] xl:relative 
        `}
    >
      <BlogLogo />
      <MenuToggleButton />
    </header>
  );
};

export default Header;
