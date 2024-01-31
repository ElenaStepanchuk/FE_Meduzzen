"use client";
import React from "react";

import { Loader } from "@/components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useGetCompanyQuery } from "@/redux/api/companyApi";

import css from "./page.module.css";

const Company = () => {
  const { data, isLoading, error } = useGetCompanyQuery(null);
  const { user } = useUser();

  console.log("data company", data);

  if (isLoading) {
    return <Loader />;
  }
  if (!user && error && "status" in error && error.status === 401) {
    throw new Error("Unauthorized");
  }
  console.log("ErrComp", error);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Company profile</h1>
      {data && (
        <>
          <p>{data?.detail?.company_name}</p>
          <p>email: {data?.detail?.company_description}</p>
          <p>first name: {data?.detail?.visibility}</p>
        </>
      )}
    </div>
  );
};
export default Company;
