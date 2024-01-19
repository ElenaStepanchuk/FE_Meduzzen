"use client";
import React, { useState } from "react";
import css from "./page.module.css";
import { Form, FormInput, Button } from "@/components";

import Image from "next/image";

import showPassword from "@/public/showButton/showPasswordSvg.svg";
import notShowPassword from "@/public/showButton/notShowPasswordSvg.svg";
import { RegistrationUser } from "@/redux/auth/authOperations";
import Link from "next/link";

const Registration = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState<string>("password");
  const [icon, setIcon] = useState<any>(notShowPassword);

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const { value, name } = event.currentTarget;
    switch (name) {
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
    setEmail("");
    setPassword("");
  };
  const submitForm = async () => {
    const response = await RegistrationUser(email, password);
    reset();
    return response;
  };

  const Show = () => {
    if (type === "password") {
      setType("text");
      setIcon(showPassword);
    } else {
      setType("password");
      setIcon(notShowPassword);
    }
  };

  return (
    <div className={css.container}>
      <Form
        formMargin={"50px auto"}
        submitForm={submitForm}
        formWidth={"400px"}
      >
        <FormInput
          label={"Your email"}
          value={email}
          name={"email"}
          handleInputChange={handleInputChange}
          type="email"
          inputWidth={"390px"}
          pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
          minLength="5"
          maxLength="30"
        />
        <div className={css.container_password}>
          <FormInput
            label={"Your password"}
            value={password}
            name={"password"}
            handleInputChange={handleInputChange}
            type={type}
            inputWidth={"390px"}
            minLength="8"
            maxLength="10"
          ></FormInput>
          <button className={css.show_button} type="button" onClick={Show}>
            <Image className={css.show_icon} src={icon} alt="show password" />
          </button>
        </div>
        <Button
          onClick={submitForm}
          type={"button"}
          buttonWidth={"130px"}
          borderRadius={"20px"}
          buttonBottom={"40%"}
          buttonLeft={"calc(50% - 65px)"}
        >
          {"Registration"}
        </Button>
      </Form>
      <Button
        onClick={submitForm}
        type={"button"}
        buttonWidth={"80px"}
        borderRadius={"20px"}
        buttonBottom={"45%"}
        buttonLeft={"calc(50% - 40px)"}
      >
        {
          <a className={css.link} href="/api/auth/login">
            Auth0
          </a>
        }
      </Button>
      <p className={css.text1}>or, if you already have your own account</p>
      <Link className={css.link1} href="/authorization">
        login in app
      </Link>
    </div>
  );
};
export default Registration;
