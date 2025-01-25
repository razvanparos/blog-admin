import React from "react";

const ButtonComponent = ({ text, type }) => {
  return (
    <button
      className={`${
        type === "primary" ? "bg-darkBlue text-white" : "border"
      } p-2 rounded-md `}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
