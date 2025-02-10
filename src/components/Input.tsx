import * as React from "react";

interface InputTypes{
    type:string,
    onChangeFunction:Function,
    value:string,
    placeholder?:string,
    disabled?:boolean
    searchBar?:boolean
}

function Input({type,onChangeFunction,value,placeholder,disabled,searchBar}:InputTypes) {
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChangeFunction}
      className={`${searchBar?'border-0':'border'} w-full bg-gray-100 p-2 rounded-md outline-none`}
    />
  );
}

export default Input;
