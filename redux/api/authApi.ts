import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery, { refreshQuery } from "../baseQuery/baseQuery";
import { IUser } from "@/types/user";
import { IResponse } from "@/types/response";
import { ICreateUser } from "@/types/createUser";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query<IResponse<IUser>, string | null>({
      query: () => ({
        url: "auth/me",
        method: "GET",
      }),
    }),
    register: builder.mutation<IResponse<IUser>, ICreateUser>({
      query: (credentials) => ({
        url: "auth/registration",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation<IResponse<IUser>, ICreateUser>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: IResponse<IUser>) => {
        const { accessToken, refreshToken, actionToken } =
          response.detail.tokens;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("actionToken", actionToken);
        localStorage.setItem("isAuth", "true");
        localStorage.setItem(
          "currentUser",
          response.detail.first_name || response.detail.email || "null"
        );
        return response;
      },
    }),

    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
      transformResponse: (response: IResponse<boolean>) => {
        localStorage.removeItem("isAuth");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("actionToken");
        localStorage.removeItem("currentUser");
        return response;
      },
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = authApi;

const refreshApi = createApi({
  reducerPath: "authApi",
  baseQuery: refreshQuery,
  endpoints: (builder) => ({
    refreshTokens: builder.query<IResponse<string>, string | null>({
      query: () => ({
        url: "auth/refresh",
        method: "GET",
      }),
      transformResponse: (response: IResponse<any>) => {
        const { accessToken, refreshToken, actionToken } = response.detail;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("actionToken", actionToken);
        return response;
      },
    }),
  }),
});

export const { useRefreshTokensQuery } = refreshApi;
