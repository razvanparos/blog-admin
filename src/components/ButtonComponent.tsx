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
      className={`p-2 rounded-md flex justify-center items-center min-h-[40px]
        ${type === "primary" ? "bg-darkBlue text-white" : "border"} 
        ${type === "rounded" ? "bg-darkBlue text-white min-h-[30px] w-[30px] h-[30px] rounded-full text-xl" : ""} 
       `}
    >
      {loader ? <Spinner /> : text}
    </button>
  );
};

export default ButtonComponent;
