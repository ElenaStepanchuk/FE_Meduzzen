"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IResponse } from "../../types/response";
import { IUser } from "../../types/user";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<IResponse<IUser[]>, string>({
      query: () => `users`,
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
