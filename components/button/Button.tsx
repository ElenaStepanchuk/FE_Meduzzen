"use client";
import React, { useState, useEffect } from "react";
import css from "./button.module.css";

interface IProps {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonWidth: string;
  borderRadius: string;
  buttonTop?: string;
  buttonLeft?: string;
  buttonBottom?: string;
  buttonRight?: string;
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
  type,
  onClick,
  buttonWidth,
  children,
  borderRadius,
  buttonTop,
  buttonLeft,
  buttonRight,
  buttonBottom,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={css.button}
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
