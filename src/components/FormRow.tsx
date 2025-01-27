import React from "react";

const FormRow = ({ type, placeholder, value, onChangeFunction }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`
        bg-slate-100 border rounded-md p-2 outline-none text-dark
        ${type==='checkbox'?'w-[20px] cursor-pointer':''}
        `}
      value={value}
      onChange={onChangeFunction}
    />
  );
};

export default FormRow;
