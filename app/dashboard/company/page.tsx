"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Loader } from "@/components";
import { setIsAuth } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/hooks/hooks";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useGetCompanyQuery } from "@/redux/api/companyApi";

import css from "./page.module.css";

const Company = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useGetCompanyQuery(null);
  const { user } = useUser();

  if (isLoading) {
    return <Loader />;
  }

  if (!user && error && "status" in error && error?.status === 401) {
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
      <h1 className={css.title}>Company profile</h1>
      {data && (
        <div>
          <p>{data?.detail?.company_name}</p>
          <p>email: {data?.detail?.company_description}</p>
          <p>first name: {data?.detail?.visibility}</p>
        </div>
      )}
    </div>
  );
};
export default Company;
