import React from "react";

const FormRow = ({ type, placeholder, value, onChangeFunction }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`
        ${type==='checkbox'?'w-[30px] cursor-pointer':''}
        bg-slate-100 border rounded-md p-2 w-full outline-none text-dark
        `}
      value={value}
      onChange={onChangeFunction}
    />
  );
};

export default FormRow;
