import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "@/store/store";
import { useAppDispatch } from "@/hooks/hooks";

const BASE_URL = process.env.NEXT_PUBLIC_HOST;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export default baseQuery;
