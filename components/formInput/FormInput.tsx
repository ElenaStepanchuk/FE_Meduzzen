"use client";
import css from "./formInput.module.css";
import React from "react";

import { IFormInput } from "@/types/formInput";

const FormInput: React.FC<IFormInput> = ({
  value,
  handleInputChange,
  label,
  name,
  inputWidth,
  type,
  pattern,
  minLength,
  maxLength,
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
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
      ></input>
      <label className={css.form_label}>{label}</label>
    </div>
  );
};
export default FormInput;
