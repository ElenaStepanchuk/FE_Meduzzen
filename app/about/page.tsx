"use client";
import React, { useState } from "react";
import { Button, ModalWindow, Form, FormInput } from "@/components";
import css from "./page.module.css";
import { addText } from "@/redux/testString/testStringSlice";

import { useDispatch, useSelector } from "react-redux/es/exports";

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClick = (e: React.MouseEvent) => {
    setIsModalOpen((isOpen) => !isOpen);
  };

  const dispatch = useDispatch();
  const valueText = useSelector((state: any) => state.testString);
  console.log(valueText.value);

  const handleInputChange = (event: any) => {
    dispatch(addText(event.target.value));
  };

  const submitForm = () => {};
  return (
    <div>
      <div className={css.container}>
        <h1 className={css.title}>About page</h1>
        <form onSubmit={submitForm}>
          <input name={"text"} onChange={handleInputChange} type={"text"} />
        </form>
        <h2 className={css.text}>{valueText.value}</h2>
        <p className={css.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Button
          onClick={onClick}
          type={"button"}
          buttonWidth={"160px"}
          borderRadius={"20px"}
          buttonBottom={"15%"}
          buttonLeft={"calc(50% - 80px)"}
        >
          {"Open modal window"}
        </Button>
      </div>
      {isModalOpen && (
        <ModalWindow
          closeModal={onClick}
          modalWidth={"500px"}
          textAlign={"center"}
        >
          <h2>Modal window</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </ModalWindow>
      )}
    </div>
  );
};
export default About;
