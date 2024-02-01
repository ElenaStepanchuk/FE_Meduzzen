"use client";
import React from "react";
import css from "./button.module.css";
import { IButton } from "../../types/button";

const Button: React.FC<IButton> = ({
  type,
  onClick,
  buttonWidth,
  children,
  borderRadius,
  buttonTop,
  buttonLeft,
  buttonRight,
  buttonBottom,
  key,
  id,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={css.button}
        key={key}
        id={id}
        style={{
          width: buttonWidth,
          borderRadius: borderRadius,
          top: buttonTop,
          left: buttonLeft,
          right: buttonRight,
          bottom: buttonBottom,
        }}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
