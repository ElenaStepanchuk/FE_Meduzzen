"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalState {
  isOpen: boolean;
}

const stateLocalStorage = localStorage.getItem("isOpen");

const initialState: IModalState = stateLocalStorage
  ? { isOpen: JSON.parse(stateLocalStorage) }
  : {
      isOpen: false,
    };

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsModal } = modalSlice.actions;
