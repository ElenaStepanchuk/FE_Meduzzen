"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Form, FormInput, Button, Loader, Toast } from "@/components";
import ValidationPassword from "../../utils/validationPassword.util";
import ValidationEmail from "../../utils/validationEmail.util";

import showPassword from "@/public/showButton/showPasswordSvg.svg";
import notShowPassword from "@/public/showButton/notShowPasswordSvg.svg";

import css from "./page.module.css";
import { useRegisterMutation } from "@/redux/api/authApi";

import { ICreateUser } from "@/types/createUser";

const Registration = () => {
  const router = useRouter();
  const [register, { isLoading, error }] = useRegisterMutation();
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

  const [validatePass, setValidatePass] = useState<{
    color01: string;
    color02: string;
    color03: string;
    message: string;
  }>({
    color01: "grey",
    color02: "grey",
    color03: "grey",
    message:
      "The password must contain between 6 and 10 characters, one number, one capital letter and one special character!",
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
        const validate = ValidationPassword(value);
        const { currentColor, currentColor2, currentColor3, currentMessage } =
          validate;
        setValidatePass({
          ...validatePass,
          color01: currentColor,
          color02: currentColor2,
          color03: currentColor3,
          message: currentMessage,
        });
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

    if (validatePass.message !== "Strong!") {
      setShow({ ...show, showNotificationPassword: true });
      return;
    }

    await register(credentials);
    if (error) {
      return "error";
    } else {
      router.push("/authorization");
      setCredential({ email: "", password: "" });
    }
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
      <h1 className={css.title}>Registration form</h1>
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
          type="email"
          inputWidth={"390px"}
          minLength="5"
          maxLength="30"
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
          />
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
          buttonWidth={"130px"}
          borderRadius={"20px"}
          buttonBottom={"25%"}
          buttonLeft={"calc(50% - 65px)"}
        >
          {"Registration"}
        </Button>
      </Form>
      <p className={css.message}>{validatePass.message}</p>
      <div className={css.bar_strangth}>
        <div
          className={css.container_strength}
          style={{ background: `${validatePass.color01}` }}
        ></div>
        <div
          className={css.container_strength}
          style={{ background: `${validatePass.color02}` }}
        ></div>
        <div
          className={css.container_strength}
          style={{ background: `${validatePass.color03}` }}
        ></div>
      </div>
      <Button
        onClick={submitForm}
        type={"button"}
        buttonWidth={"80px"}
        borderRadius={"20px"}
        buttonBottom={"30%"}
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
          message={"Password not valid! Add valid password!"}
          buttonSelect={["ok"]}
          handleClick={closeNotification}
          height={"10%"}
        />
      )}
    </div>
  );
};
export default Registration;
