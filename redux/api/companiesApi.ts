import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "../baseQuery/baseQuery";

import { IResponse } from "../../types/response";
import { ICompany } from "@/types/company";

export const companiesApi = createApi({
  reducerPath: "companiesApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllCompanies: builder.query<IResponse<ICompany[]>, string>({
      query: () => `companies`,
    }),
  }),
});

export const { useGetAllCompaniesQuery } = companiesApi;
