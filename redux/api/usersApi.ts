import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IResponse } from "../../types/response";
import { IUser } from "../../types/user";

const HOST = process.env.HOST;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: HOST,
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<IResponse<IUser[]>, string>({
      query: () => `users`,
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
