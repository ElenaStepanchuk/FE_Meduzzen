"use client";
import { type } from "os";
import css from "./formInput.module.css";
import React from "react";

interface IProps {
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string | number;
  name: string;
  inputWidth: string;
  type: string;
}

const FormInput: React.FC<IProps> = ({
  value,
  handleInputChange,
  label,
  name,
  inputWidth,
  type,
}) => {
  return (
    <div className={css.input_wrapper}>
      <input
        placeholder=" "
        className={css.form_input}
        value={value}
        type={type}
        name={name}
        required
        onChange={handleInputChange}
        style={{ width: inputWidth }}
      ></input>
      <label className={css.form_label}>{label}</label>
    </div>
  );
};
export default FormInput;
