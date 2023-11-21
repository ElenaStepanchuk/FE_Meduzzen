"use client";
import { configureStore } from "@reduxjs/toolkit";
import { testStringSlice } from "@/redux/testString/testStringSlice";

export const store = configureStore({
  reducer: {
    testString: testStringSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
