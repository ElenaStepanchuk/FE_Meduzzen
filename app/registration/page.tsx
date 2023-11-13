"use client";
import React, { useState } from "react";
import css from "./page.module.css";
import { Form, FormInput, Button } from "@/components";

const Registration = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const { value, name } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  const submitForm = () => {
    reset();
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>User registration</h1>
      <Form
        formMargin={"50px auto"}
        submitForm={submitForm}
        formWidth={"400px"}
      >
        <FormInput
          label={"Your name"}
          value={name}
          name={"name"}
          handleInputChange={handleInputChange}
          type={"text"}
          inputWidth={"390px"}
        />
        <FormInput
          label={"Your email"}
          value={email}
          name={"email"}
          handleInputChange={handleInputChange}
          type={"text"}
          inputWidth={"390px"}
        />
        <FormInput
          label={"Your password"}
          value={password}
          name={"password"}
          handleInputChange={handleInputChange}
          type={"password"}
          inputWidth={"390px"}
        />
        <Button
          onClick={submitForm}
          type={"button"}
          buttonWidth={"100px"}
          borderRadius={"20px"}
          buttonBottom={"30%"}
          buttonLeft={"calc(50% - 50px)"}
        >
          {"Registration"}
        </Button>
      </Form>
    </div>
  );
};
export default Registration;
