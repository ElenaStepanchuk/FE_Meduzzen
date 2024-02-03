"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Button, Loader } from "@/components";
import { setIsAuth } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/hooks/hooks";
import { useGetAllCompaniesQuery } from "@/redux/api/companiesApi";
import { useUser } from "@auth0/nextjs-auth0/client";

import css from "./page.module.css";

import { ICompany } from "@/types/company";

const Companies = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    data = { detail: [] },
    isLoading,
    error,
  } = useGetAllCompaniesQuery("");

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
    console.log("error?.status", error?.status);
  }

  const onClick = (e: React.MouseEvent) => {};

  return (
    <div className={css.container}>
      <h1 className={css.title}>List of companies</h1>
      <ul className={css.company_list}>
        {data?.detail.map((item: ICompany) => (
          <li key={item.id} style={{ marginRight: "20px" }}>
            <div
              className="card d-flex justify-content-center list-group-item-action"
              style={{ width: "20rem" }}
            >
              <div className="card-body" style={{ marginBottom: "30px" }}>
                <h5 className="card-title">{item.company_name}</h5>
                <p className="card-text">
                  {item.company_description ||
                    "Some quick example text to build on the card title and make up the bulk of the card's content."}
                </p>
                <p className="card-text">{item.visibility}</p>
              </div>
              <Button
                onClick={onClick}
                type={"button"}
                buttonWidth={"140px"}
                borderRadius={"20px"}
                buttonBottom={"3%"}
                buttonLeft={"calc(50% - 70px)"}
              >
                {"Join"}
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="d-flex justify-content-center" aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">2</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Companies;
