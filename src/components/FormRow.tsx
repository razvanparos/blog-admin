import React from "react";
import LabelComponent from "./LabelComponent.tsx";
interface FormRowType {
  type?: string;
  placeholder?: string;
  value?: any;
  onChangeFunction?: Function;
  labelText?: string;
  textarea?: boolean;
  disabled?: boolean;
}

const FormRow = ({
  type,
  placeholder,
  value,
  onChangeFunction,
  labelText,
  textarea,
  disabled,
}: FormRowType) => {
  return (
    <>
      <LabelComponent labelText={labelText} />
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        className={`
        bg-slate-100 border rounded-md p-2 outline-none text-dark
        ${type === "checkbox" ? " bg-red-600 cursor-pointer" : "w-full"}
        `}
        value={value}
        onChange={onChangeFunction}
      />
    </>
  );
};

export default FormRow;
