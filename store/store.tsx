"use client";
import { configureStore } from "@reduxjs/toolkit";
import { testStringSlice } from "@/redux/testString/testStringSlice";
import { usersApi } from "../redux/api/usersApi";
import { healthCheckApi } from "../redux/api/healthCheckApi";

export const store = configureStore({
  reducer: {
    testString: testStringSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [healthCheckApi.reducerPath]: healthCheckApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      usersApi.middleware,
      healthCheckApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
