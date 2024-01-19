"use client";
import React from "react";

import css from "./page.module.css";
import { useGetCompanyQuery } from "@/redux/api/companyApi";
import { Loader } from "@/components";

const Company = () => {
  const { data = { detail: {} }, isLoading } = useGetCompanyQuery("");
  console.log("data company", data);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={css.container}>
      <h1 className={css.title}>Company profile</h1>
      <p>{data.detail.company_name}</p>
      <p>email: {data.detail.company_description}</p>
      <p>first name: {data.detail.visibility}</p>
    </div>
  );
};
export default Company;
