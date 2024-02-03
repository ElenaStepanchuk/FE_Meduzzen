"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  isAuth: boolean;
}

const stateLocalStorage = localStorage.getItem("isAuth");

const initialState: IAuthState = stateLocalStorage
  ? { isAuth: JSON.parse(stateLocalStorage) }
  : {
      isAuth: false,
    };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;
