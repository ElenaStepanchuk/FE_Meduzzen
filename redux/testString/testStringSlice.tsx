"use client";
import { createSlice } from "@reduxjs/toolkit";

interface testString {
  value: string;
}
const initialState: testString = {
  value: "",
};

export const testStringSlice = createSlice({
  name: "testString",
  initialState,
  reducers: {
    addText(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addText } = testStringSlice.actions;
