import React from "react";
interface FormRowType {
  type?: string;
  placeholder?: string;
  value?: any;
  onChangeFunction?: Function;
  labelText?: string;
  textarea?: boolean;
}

const FormRow = ({
  type,
  placeholder,
  value,
  onChangeFunction,
  labelText,
  textarea,
}: FormRowType) => {
  return (
    <>
      <div className="flex gap-x-2 items-center">
        {
          labelText?<div className="bg-darkBlue w-[10px] h-[10px] rounded-full"></div>:''
        }  
        <label className="text-lg font-semibold text-darkBlue">
          {labelText}
        </label>
      </div>

      {textarea ? (
        <textarea
          placeholder={placeholder}
          onChange={onChangeFunction}
          value={value}
          className="bg-slate-100 border rounded-md p-2 outline-none text-dark w-full min-h-[150px]"
        >
        </textarea>
      ) : (
        <input
          placeholder={placeholder}
          type={type}
          className={`
        bg-slate-100 border rounded-md p-2 outline-none text-dark
        ${type === "checkbox" ? " bg-red-600 cursor-pointer" : ""}
        `}
          value={value}
          onChange={onChangeFunction}
        />
      )}
    </>
  );
};

export default FormRow;
