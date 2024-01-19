"use client";
import React, { useState } from "react";
import css from "./page.module.css";
import { Form, FormInput, Button } from "@/components";

import { setUser, setToken } from "@/redux/auth/authSlice";
import Image from "next/image";

import showPassword from "@/public/showButton/showPasswordSvg.svg";
import notShowPassword from "@/public/showButton/notShowPasswordSvg.svg";
import { LoginUser } from "@/redux/auth/authOperations";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/hooks";

const Authorization = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState<string>("password");
  const [icon, setIcon] = useState<any>(notShowPassword);
  const dispatch = useAppDispatch();

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
    const response = await LoginUser(email, password);
    console.log("response", response);
    const { id, first_name, last_name, photo, role } = response.detail;
    dispatch(setUser({ email, id, first_name, last_name, photo, role }));
    const { accessToken, refreshToken, actionToken } = response.detail.tokens;
    dispatch(setToken(accessToken));
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("actionToken", actionToken);
    localStorage.setItem("isAuth", "true");
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
          type={"text"}
          inputWidth={"390px"}
        />
        <div className={css.container_password}>
          <FormInput
            label={"Your password"}
            value={password}
            name={"password"}
            handleInputChange={handleInputChange}
            type={type}
            inputWidth={"390px"}
          ></FormInput>
          <button className={css.show_button} type="button" onClick={Show}>
            <Image className={css.show_icon} src={icon} alt="show password" />
          </button>
        </div>
        <Button
          onClick={submitForm}
          type={"button"}
          buttonWidth={"80px"}
          borderRadius={"20px"}
          buttonBottom={"40%"}
          buttonLeft={"calc(50% - 40px)"}
        >
          {"Login"}
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
      <p className={css.text1}>or, if you don`t have your own account</p>
      <Link className={css.link1} href="/registration">
        registration in app
      </Link>
    </div>
  );
};

export default Authorization;
