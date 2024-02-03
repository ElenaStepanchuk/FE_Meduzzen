"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Form, FormInput, Button, Loader, Toast } from "@/components";
import { setIsAuth } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/hooks/hooks";
import { useLoginMutation } from "@/redux/api/authApi";
import ValidationEmail from "@/utils/validationEmail.util";

import showPassword from "@/public/showButton/showPasswordSvg.svg";
import notShowPassword from "@/public/showButton/notShowPasswordSvg.svg";

import css from "./page.module.css";

import { ICreateUser } from "@/types/createUser";

const Authorization = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [login, { isLoading, error }] = useLoginMutation();
  const [credentials, setCredential] = useState<ICreateUser>({
    email: "",
    password: "",
  });
  const [show, setShow] = useState<{
    type: string;
    icon: string;
    showNotificationEmail: boolean;
    showNotificationPassword: boolean;
  }>({
    type: "password",
    icon: notShowPassword,
    showNotificationEmail: false,
    showNotificationPassword: false,
  });

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const { value, name } = event.currentTarget;
    switch (name) {
      case "email":
        setCredential({ ...credentials, email: value });
        break;
      case "password":
        setCredential({ ...credentials, password: value });
        break;
      default:
        return;
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  const submitForm = async () => {
    const validationEmail = ValidationEmail(credentials.email);
    if (validationEmail !== "good") {
      setShow({ ...show, showNotificationEmail: true });
      return;
    }

    if (credentials.password === "") {
      setShow({ ...show, showNotificationPassword: true });
      return;
    }

    const auth: any = await login(credentials);
    if (auth?.error?.status === 400) {
      setShow({ ...show, showNotificationPassword: true });
      return;
    }

    dispatch(setIsAuth(true));
    router.push("/dashboard/profile");
    setCredential({ email: "", password: "" });
  };

  const submitFormAuth0 = async () => {
    dispatch(setIsAuth(true));
    router.push("/dashboard/subscriber");
  };

  const Show = () => {
    const { type } = show;
    if (type === "password") {
      setShow({
        ...show,
        type: "text",
        icon: showPassword,
      });
    } else {
      setShow({
        ...show,
        type: "password",
        icon: notShowPassword,
      });
    }
  };

  const closeNotification = () => {
    setShow({
      ...show,
      showNotificationEmail: false,
      showNotificationPassword: false,
    });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Login form</h1>
      <Form
        formMargin={"50px auto"}
        submitForm={submitForm}
        formWidth={"400px"}
      >
        <FormInput
          label={"Your email"}
          value={credentials.email}
          name={"email"}
          handleInputChange={handleInputChange}
          type={"text"}
          pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
          inputWidth={"390px"}
        />
        <div className={css.container_password}>
          <FormInput
            label={"Your password"}
            value={credentials.password}
            name={"password"}
            handleInputChange={handleInputChange}
            type={show.type}
            inputWidth={"390px"}
            minLength="6"
            maxLength="10"
          ></FormInput>
          <button className={css.show_button} type="button" onClick={Show}>
            <Image
              className={css.show_icon}
              src={show.icon}
              alt="show password"
            />
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
        onClick={submitFormAuth0}
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
      {show.showNotificationEmail && (
        <Toast
          message={"Add correct email!"}
          buttonSelect={["ok"]}
          handleClick={closeNotification}
          height={"10%"}
        />
      )}
      {show.showNotificationPassword && (
        <Toast
          message={"Password or email not valid!"}
          buttonSelect={["ok"]}
          handleClick={closeNotification}
          height={"10%"}
        />
      )}
    </div>
  );
};

export default Authorization;
