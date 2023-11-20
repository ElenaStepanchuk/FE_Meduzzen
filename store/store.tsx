"use client";
import { configureStore } from "@reduxjs/toolkit";
import { testStringSlice } from "@/redux/testString/testStringSlice";

export const store = configureStore({
  reducer: {
    testString: testStringSlice.reducer,
  },
});
