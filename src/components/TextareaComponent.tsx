import * as React from "react";
import LabelComponent from "./LabelComponent.tsx";
function TextareaComponent({
  labelText,
  value,
  placeholder,
  onChangeFunction,
}) {
  return (
    <>
      <LabelComponent labelText={labelText} />
      <textarea
        className="bg-slate-100 border rounded-md p-2 outline-none text-dark w-full min-h-[150px]"
        value={value}
        placeholder={placeholder}
        onChange={onChangeFunction}
      ></textarea>
    </>
  );
}

export default TextareaComponent;
