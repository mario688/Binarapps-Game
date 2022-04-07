import React from "react";
import Style from "./Input.module.scss";
interface InputProps {
  type: string;
  id: string;
  required: boolean;
  minLength?: number;
  placeholder?: string;
}
const Input: React.FC<{ label: string; ref: any; input: InputProps }> =
  React.forwardRef((props, ref: any) => {
    const { label, input } = props;
    return (
      <div className={Style.inputContainer}>
        <label htmlFor={input.id}>{label}</label>
        <input ref={ref} {...input}></input>
      </div>
    );
  });
export default Input;
