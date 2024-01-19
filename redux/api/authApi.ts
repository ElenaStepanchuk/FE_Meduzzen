import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "../baseQuery/baseQuery";
import { IUser } from "@/types/user";
import { IResponse } from "@/types/response";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query<IResponse<IUser>, string>({
      query: () => `auth/me`,
    }),
  }),
});

export const { useGetProfileQuery } = authApi;
