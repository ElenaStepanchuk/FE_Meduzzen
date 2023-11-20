"use client";
import css from "./form.module.css";
import React from "react";

import { IForm } from "@/types/form";

const Form: React.FC<IForm> = ({
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
