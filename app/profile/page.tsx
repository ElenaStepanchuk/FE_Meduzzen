"use client";
import React from "react";

import css from "./page.module.css";

import { useGetProfileQuery } from "@/redux/api/authApi";
import Image from "next/image";
import defaultProfile from "../../public/defaultProfile.jpg";
import { Loader } from "@/components";

import { useUser } from "@auth0/nextjs-auth0/client";

const Profile = () => {
  const { data = { detail: {} }, isLoading } = useGetProfileQuery("");

  console.log("data me", data);

  const { user, error } = useUser();

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <div>{error.message}</div>;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Your profile</h1>
      <div className="card" style={{ width: "20rem" }}>
        <Image
          src={data?.detail?.photo || defaultProfile}
          height={280}
          className="card-img-top"
          alt="profile"
        />

        <div className="card-body">
          <h5 className="card-title">
            first name:
            {data?.detail?.first_name || data.detail.email}
          </h5>

          <p className="card-text">
            last name:
            {data?.detail?.last_name || data.detail.email}
          </p>

          <p className="card-text">email : {data.detail.email}</p>

          <a href="#" className="btn btn-primary">
            Update profile
          </a>
        </div>
      </div>
    </div>
  );
};
export default Profile;
