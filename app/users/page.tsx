"use client";
import React from "react";
import Image from "next/image";

import { Loader } from "@/components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useGetAllUsersQuery } from "@/redux/api/usersApi";

import css from "./page.module.css";
import defaultProfile from "../../public/defaultProfile.jpg";

import { IUser } from "../../types/user";

const Users = () => {
  const { data = { detail: [] }, isLoading, error } = useGetAllUsersQuery("");
  console.log("users data", data);

  const { user } = useUser();

  if (isLoading) {
    return <Loader />;
  }
  if (!user && error && "status" in error && error.status === 401) {
    throw new Error("Unauthorized");
  }
  return (
    <div className={css.container}>
      <h1 className={css.title}>All users list</h1>
      <ul className={css.user_list}>
        {data.detail.map((item: IUser) => (
          <li key={item.id} style={{ marginRight: "20px" }}>
            <div
              className="card d-flex justify-content-center list-group-item-action"
              style={{ width: "20rem" }}
            >
              <Image
                src={item?.photo || defaultProfile}
                height={280}
                className="card-img-top"
                alt="profile"
              />
              <div className="card-body">
                <h5 className="card-title">
                  first name: {item?.first_name || item?.email}
                </h5>
                <p className="card-text">
                  last name: {item?.last_name || item.email}
                </p>
                <p className="card-text">email: {item?.email}</p>
                <p className="card-text">
                  role: {item.role || "didh`t have role."}
                </p>
              </div>
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
export default Users;
