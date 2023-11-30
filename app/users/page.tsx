"use client";
import React from "react";

import css from "./page.module.css";

import { useGetAllUsersQuery } from "@/redux/api/usersApi";
import { IUser } from "../../types/user";

const Users = () => {
  const { data = { detail: [] }, isLoading } = useGetAllUsersQuery("");

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div className={css.container}>
      <h1 className={css.title}>List of users page</h1>
      <ul className={css.user_list}>
        {data.detail.map((item: IUser) => (
          <li className={css.user_item} key={item.id}>
            <p className={css.user_item__text}>{item.first_name}</p>
            <p className={css.user_item__text}>{item.last_name}</p>
            <p className={css.user_item__text}>{item.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
