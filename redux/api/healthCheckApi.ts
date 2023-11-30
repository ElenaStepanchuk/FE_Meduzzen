import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IResponse } from "../../types/response";
import { IStatus } from "../../types/status";

const HOST = process.env.HOST;

export const healthCheckApi = createApi({
  reducerPath: "healthCheckApi",
  baseQuery: fetchBaseQuery({
    baseUrl: HOST,
  }),
  endpoints: (builder) => ({
    getHealthCheckApi: builder.query<IResponse<IStatus>, string>({
      query: () => ``,
    }),
  }),
});

export const { useGetHealthCheckApiQuery } = healthCheckApi;
