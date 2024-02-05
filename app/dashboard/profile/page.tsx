"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button, Form, FormInput, Loader, ModalWindow } from "@/components";
import { setIsModal } from "@/redux/slice/modalSlice";

import { setIsAuth } from "@/redux/slice/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useGetProfileQuery } from "@/redux/api/authApi";
import { useUpdateUserMutation } from "@/redux/api/usersApi";
import { useUser } from "@auth0/nextjs-auth0/client";

import { GetFromLocalstorageToken } from "@/utils/getFromLocalstorage.util";

import css from "./page.module.css";
import defaultProfile from "../../../public/defaultProfile.jpg";

const Profile = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = GetFromLocalstorageToken("accessToken");
  const { user } = useUser();

  const { data, isLoading, error } = useGetProfileQuery(token);
  const [updateUser] = useUpdateUserMutation();
  const { isOpen } = useAppSelector((state) => state.modal);

  const [credentials, setCredential] = useState<{
    first_name: string;
    last_name: string;
  }>({
    first_name: "",
    last_name: "",
  });

  const onClick = () => {
    dispatch(setIsModal(true));
    setCredential({
      first_name: `${data?.detail?.first_name || data?.detail?.email}`,
      last_name: `${data?.detail?.last_name || data?.detail?.email}`,
    });
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
    const userId = data?.detail.id;

    await updateUser({
      id: userId,
      first_name: credentials.first_name,
      last_name: credentials.last_name,
    });
    router.push("/dashboard/profile");
    setCredential({ first_name: "", last_name: "" });
    dispatch(setIsModal(false));
    window.location.reload();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!user || !data) {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("actionToken");
    localStorage.removeItem("currentUser");
    dispatch(setIsAuth(false));
    router.push("/authorization");
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Your profile</h1>
      {data && (
        <div className="card" style={{ width: "20rem", height: "32rem" }}>
          <Image
            src={data?.detail?.photo || defaultProfile}
            height={280}
            style={{ width: "auto" }}
            className="card-img-top"
            alt="profile"
          />

          <div className="card-body">
            <h5 className="card-title">
              first name : {data?.detail?.first_name || data?.detail?.email}
            </h5>

            <p className="card-text">
              last name : {data?.detail?.last_name || data?.detail?.email}
            </p>

            <p className="card-text">email : {data?.detail?.email}</p>

            <p className="card-text">
              role : {data?.detail?.role || "you didh`t have role."}
            </p>

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

      {isOpen && (
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
export default Profile;
