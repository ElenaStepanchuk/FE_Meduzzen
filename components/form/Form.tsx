"use client";
import css from "./form.module.css";
import React from "react";

interface IProps {
  formMargin: string;
  formWidth: string;
  children?: React.ReactNode;
  submitForm: React.FormEventHandler<HTMLFormElement> | undefined;
}

const Form: React.FC<IProps> = ({
  formMargin,
  children,
  submitForm,
  formWidth,
}) => {
  return (
    <div>
      <form
        className={css.form}
        id="form"
        onSubmit={submitForm}
        style={{ width: formWidth, margin: formMargin }}
      >
        {children}
      </form>
    </div>
  );
};
export default Form;
