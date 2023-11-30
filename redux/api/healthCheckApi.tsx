"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IResponse } from "../../types/response";
import { IStatus } from "../../types/status";

export const healthCheckApi = createApi({
  reducerPath: "healthCheckApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  endpoints: (builder) => ({
    getHealthCheckApi: builder.query<IResponse<IStatus>, string>({
      query: () => ``,
    }),
  }),
});

export const { useGetHealthCheckApiQuery } = healthCheckApi;
