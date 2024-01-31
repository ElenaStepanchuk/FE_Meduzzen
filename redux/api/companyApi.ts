import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "../baseQuery/baseQuery";
import { ICompany } from "@/types/company";
import { IResponse } from "@/types/response";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery,
  endpoints: (builder) => ({
    getCompany: builder.query<IResponse<ICompany>, IResponse<ICompany> | null>({
      query: () => ({
        url: `companies/:id`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCompanyQuery } = companyApi;
