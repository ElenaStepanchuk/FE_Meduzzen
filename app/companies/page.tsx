"use client";
import React from "react";

import css from "./page.module.css";
import { useGetAllCompaniesQuery } from "@/redux/api/companiesApi";
import { ICompany } from "@/types/company";
import { Loader } from "@/components";

const Companies = () => {
  const { data = { detail: [] }, isLoading } = useGetAllCompaniesQuery("");
  console.log("data companies", data);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={css.container}>
      <h1 className={css.title}>List of companies</h1>
      <ul className={css.user_list}>
        {data.detail.map((item: ICompany) => (
          <li className={css.user_item} key={item.id}>
            <p className={css.user_item__text}>{item.company_name}</p>
            <p className={css.user_item__text}>{item.company_description}</p>
            <p className={css.user_item__text}>{item.visibility}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Companies;
