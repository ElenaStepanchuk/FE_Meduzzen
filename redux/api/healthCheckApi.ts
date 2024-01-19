import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../baseQuery/baseQuery";

import { IResponse } from "../../types/response";
import { IStatus } from "../../types/status";

export const healthCheckApi = createApi({
  reducerPath: "healthCheckApi",
  baseQuery,
  endpoints: (builder) => ({
    getHealthCheckApi: builder.query<IResponse<IStatus>, string>({
      query: () => ``,
    }),
  }),
});

export const { useGetHealthCheckApiQuery } = healthCheckApi;
