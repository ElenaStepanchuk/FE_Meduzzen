"use client";
import React from "react";

import css from "./toast.module.css";
import Button from "../button";

interface IProps {
  message: string;
  buttonSelect: string[];
  handleClick: any;
  height: string;
}

const Toast: React.FC<IProps> = ({
  message,
  buttonSelect,
  handleClick,
  height,
}) => {
  return (
    <div className={css.container}>
      <div className={css.container_notification} style={{ height: height }}>
        <p className={css.text_message}>{message}</p>
        {buttonSelect &&
          buttonSelect.map((elem) => (
            <Button
              key={elem}
              id={elem}
              onClick={handleClick}
              type={"button"}
              buttonWidth={"50px"}
              borderRadius={"10px"}
              buttonBottom={"10px"}
              buttonRight={"calc(50% - 25px)"}
            >
              {elem}
            </Button>
          ))}
      </div>
    </div>
  );
};
export default Toast;
