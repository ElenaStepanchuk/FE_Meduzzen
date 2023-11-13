import React from "react";

import css from "./modalWindow.module.css";

import { Button } from "..";

interface IProps {
  closeModal: (e: React.MouseEvent) => void;
  modalWidth?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center";
  children?: React.ReactNode;
}

const ModalWindow: React.FC<IProps> = ({
  closeModal,
  modalWidth,
  textAlign,
  children,
}) => {
  return (
    <div className={css.wrapper}>
      <div
        className={css.container}
        style={{ width: modalWidth, textAlign: textAlign }}
      >
        <Button
          onClick={closeModal}
          type={"button"}
          buttonWidth={"33px"}
          borderRadius={"50%"}
          buttonTop={"-100px"}
          buttonRight={"-50px"}
        >
          X
        </Button>
        <div> {children}</div>
      </div>
    </div>
  );
};
export default ModalWindow;
