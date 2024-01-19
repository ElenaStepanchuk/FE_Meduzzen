import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "../baseQuery/baseQuery";

import { IResponse } from "../../types/response";
import { IUser } from "../../types/user";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllUsers: builder.query<IResponse<IUser[]>, string>({
      query: () => `users`,
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
