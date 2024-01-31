"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Form, FormInput, Button, Loader } from "@/components";

import showPassword from "@/public/showButton/showPasswordSvg.svg";
import notShowPassword from "@/public/showButton/notShowPasswordSvg.svg";

import css from "./page.module.css";
import { useRegisterMutation } from "@/redux/api/authApi";

import { ICreateUser } from "@/types/createUser";

const Registration = () => {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();
  const [credentials, setCredential] = useState<ICreateUser>({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState<{ type: string; icon: string }>({
    type: "password",
    icon: notShowPassword,
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
    await register(credentials);
    router.push("/authorization");
    setCredential({ email: "", password: "" });
  };

  const Show = () => {
    const { type } = showPass;
    if (type === "password") {
      setShowPass({ type: "text", icon: showPassword });
    } else {
      setShowPass({ type: "password", icon: notShowPassword });
    }
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
          pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
          minLength="5"
          maxLength="30"
        />
        <div className={css.container_password}>
          <FormInput
            label={"Your password"}
            value={credentials.password}
            name={"password"}
            handleInputChange={handleInputChange}
            type={showPass.type}
            inputWidth={"390px"}
            minLength="8"
            maxLength="10"
          ></FormInput>
          <button className={css.show_button} type="button" onClick={Show}>
            <Image
              className={css.show_icon}
              src={showPass.icon}
              alt="show password"
            />
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
