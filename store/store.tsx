"use client";
import { configureStore } from "@reduxjs/toolkit";

import { testStringSlice } from "@/redux/testString/testStringSlice";
import { usersApi } from "../redux/api/usersApi";
import { healthCheckApi } from "../redux/api/healthCheckApi";
import { authApi } from "@/redux/api/authApi";

import { companiesApi } from "@/redux/api/companiesApi";
import { companyApi } from "@/redux/api/companyApi";
import { authSlice } from "@/redux/slice/authSlice";
import { modalSlice } from "@/redux/slice/modalSlice";

export const store = configureStore({
  reducer: {
    testString: testStringSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [healthCheckApi.reducerPath]: healthCheckApi.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      authApi.middleware,
      usersApi.middleware,
      healthCheckApi.middleware,
      companiesApi.middleware,
      companyApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
