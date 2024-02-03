"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button, Form, FormInput, Loader, ModalWindow } from "@/components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useUpdateUserMutation } from "@/redux/api/usersApi";

import css from "./page.module.css";
import defaultProfile from "../../../public/defaultProfile.jpg";

const Subscriber = () => {
  const router = useRouter();
  const { user } = useUser();
  const [updateUser] = useUpdateUserMutation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [credentials, setCredential] = useState<{
    first_name: string;
    last_name: string;
  }>({
    first_name: `${user?.nickname || user?.email}`,
    last_name: `${user?.name || user?.email}`,
  });

  const onClick = (e: React.MouseEvent) => {
    setIsModalOpen((isOpen) => !isOpen);
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    const { value, name } = event.currentTarget;
    switch (name) {
      case "first_name":
        setCredential({ ...credentials, first_name: value });
        break;
      case "last_name":
        setCredential({ ...credentials, last_name: value });
        break;
      default:
        return;
    }
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    await updateUser({ ...credentials });

    router.push("/profile");
    setCredential({ first_name: "", last_name: "" });
    setIsModalOpen((isOpen) => !isOpen);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Your profile</h1>
      {user && (
        <div className="card" style={{ width: "20rem", height: "32rem" }}>
          <Image
            src={user.picture || defaultProfile}
            height={280}
            width={280}
            style={{ width: "auto" }}
            className="card-img-top"
            alt="profile"
          />

          <div className="card-body">
            <h5 className="card-title">
              first name : {user.nickname || user.email}
            </h5>

            <p className="card-text">
              last name : {user.nickname || user.email}
            </p>

            <p className="card-text">email : {user.email}</p>

            <p className="card-text">role : {"you didh`t have role."}</p>

            <Button
              onClick={onClick}
              type={"button"}
              buttonWidth={"140px"}
              borderRadius={"20px"}
              buttonBottom={"3%"}
              buttonLeft={"calc(50% - 70px)"}
            >
              {"Update profile"}
            </Button>
          </div>
        </div>
      )}
      {isModalOpen && (
        <ModalWindow
          closeModal={onClick}
          modalWidth={"412px"}
          textAlign={"center"}
        >
          <h2>Update profile</h2>
          <Form
            formMargin={"50px auto"}
            submitForm={submitForm}
            formWidth={"400px"}
          >
            <FormInput
              label={"first name"}
              value={credentials.first_name}
              name={"first_name"}
              handleInputChange={handleClick}
              type="text"
              inputWidth={"390px"}
            />
            <FormInput
              label={"last name"}
              value={credentials.last_name}
              name={"last_name"}
              handleInputChange={handleClick}
              type="text"
              inputWidth={"390px"}
            />
            <Button
              onClick={submitForm}
              type={"button"}
              buttonWidth={"130px"}
              borderRadius={"20px"}
              buttonBottom={"4%"}
              buttonLeft={"calc(50% - 65px)"}
            >
              {"Update"}
            </Button>
          </Form>
        </ModalWindow>
      )}
    </div>
  );
};
export default Subscriber;
