import React from "react";
import LabelComponent from "./LabelComponent.tsx";
interface FormRowType {
  labelText?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const FormRow = ({ labelText, disabled, children }: FormRowType) => {
  return (
    <div className={`${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      <LabelComponent labelText={labelText} />
      {children}
    </div>
  );
};

export default FormRow;
