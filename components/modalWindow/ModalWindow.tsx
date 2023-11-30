import React from "react";

import css from "./modalWindow.module.css";

import { Button } from "..";
import { IModalWindow } from "../../types/modalWindow";
import { AiOutlineClose } from "react-icons/ai";

const ModalWindow: React.FC<IModalWindow> = ({
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
          buttonWidth={"30px"}
          borderRadius={"50%"}
          buttonTop={"-100px"}
          buttonRight={"-50px"}
        >
          <AiOutlineClose className={css.buttonSvg} />
        </Button>
        <div> {children}</div>
      </div>
    </div>
  );
};
export default ModalWindow;
