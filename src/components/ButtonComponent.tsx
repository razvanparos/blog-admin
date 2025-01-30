import React from "react";
import Spinner from "./Spinner.tsx";

interface ButtonComponentPropsType {
  text: string;
  type: string;
  onClickFunction?: Function;
  loader?: boolean;
}

const ButtonComponent = ({
  text,
  type,
  onClickFunction,
  loader,
}: ButtonComponentPropsType) => {
  return (
    <button
      onClick={onClickFunction}
      className={`py-2 px-2 md:px-4 flex justify-center items-center 
        ${type === "primary" ? "bg-darkBlue text-white rounded-md min-h-[40px]" : ""} 
        ${type === "secondary" ? "border rounded-md min-h-[40px]" : ""} 
        ${type === "rounded" ? "bg-darkBlue text-white w-[30px] h-[30px] rounded-full text-xl" : ""} 
        ${type === "warning" ? "bg-yellow-300 text-darkBlue rounded-md border border-darkBlue text-xs md:text-lg" : ""} 
        ${type === "danger" ? "bg-red-300 text-darkBlue rounded-md border border-darkBlue text-xs md:text-lg" : ""} 
        ${type === "normal" ? "bg-green-300 text-darkBlue rounded-md border border-darkBlue text-xs md:text-lg" : ""} 
        ${type === "save" ? "bg-blue-300 text-darkBlue rounded-md border border-darkBlue text-xs md:text-lg" : ""} 
       `}
    >
      {loader ? <Spinner type='loader'/> : text}
    </button>
  );
};

export default ButtonComponent;
