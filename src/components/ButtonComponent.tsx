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
      className={`${
        type === "primary" ? "bg-darkBlue text-white" : "border"
      } p-2 rounded-md flex justify-center items-center min-h-[40px]`}
    >
      {loader ? <Spinner /> : text}
    </button>
  );
};

export default ButtonComponent;
