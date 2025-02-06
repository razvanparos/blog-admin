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
  const buttonClasses = {
    'primary':'bg-darkBlue text-white rounded-md min-h-[40px]',
    'secondary':'border rounded-md min-h-[40px]',
    'rounded':'bg-darkBlue text-white w-[25px] h-[25px] md:w-[30px] md:h-[30px] rounded-full text-sm md:text-xl',
    'warning':'bg-yellow-300 text-darkBlue rounded-md border border-darkBlue text-xs md:text-lg',
    'danger':'bg-red-300 text-darkBlue rounded-md border border-darkBlue text-xs md:text-lg',
    'normal':'bg-green-300 text-darkBlue rounded-md border border-darkBlue text-xs md:text-lg',
    'save':'bg-blue-300 text-darkBlue rounded-md border border-darkBlue text-xs md:text-lg',
  }
  return (
    <button
      onClick={onClickFunction}
      className={`py-2 px-2 md:px-4 flex justify-center items-center
        ${buttonClasses[type]}
       `}
    >
      {loader ? <Spinner type='loader'/> : text}
    </button>
  );
};

export default ButtonComponent;
