import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "../baseQuery/baseQuery";

import { IResponse } from "../../types/response";
import { IUser } from "../../types/user";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllUsers: builder.query<IResponse<IUser[]>, string>({
      query: () => ({
        url: `users`,
        method: "GET",
      }),
    }),
    updateUser: builder.mutation<IResponse<IUser>, any>({
      query: ({ id, email, first_name, last_name, photo }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: { email, first_name, last_name, photo },
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserMutation } = usersApi;
