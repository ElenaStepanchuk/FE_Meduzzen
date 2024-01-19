"use client";
import React, { useState } from "react";
import { Button, ModalWindow } from "@/components";
import css from "./page.module.css";
import { addText } from "@/redux/testString/testStringSlice";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { useGetHealthCheckApiQuery } from "@/redux/api/healthCheckApi";

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const onClick = (e: React.MouseEvent) => {
    setIsModalOpen((isOpen) => !isOpen);
  };

  const dispatch = useAppDispatch();

  const { value } = useAppSelector((state) => state.testString);
  const { data = { status_code: "" } } = useGetHealthCheckApiQuery("");
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(addText((event.target as HTMLInputElement).value));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className={css.container}>
        <h1 className={css.title}>About page</h1>
        <h2 className={css.title}>Health Check Api</h2>
        {data.status_code ? (
          <p className={css.text}>Backend is started on 4000 port</p>
        ) : (
          <p className={css.text}>Backend is not started</p>
        )}

        <form onSubmit={submitForm}>
          <input name={"text"} onChange={handleInputChange} type={"text"} />
        </form>
        <h2 className={css.text}>{value}</h2>
        <p className={css.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
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
