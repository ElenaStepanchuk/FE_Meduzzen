import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/types/user";

interface IAuthState {
  user: IUser | null;
  token: string | null;
  isAuth: boolean;
}

const initialState: IAuthState = {
  user: null,
  token: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      token: payload,
    }),
    setUser: (
      state,
      {
        payload: { id, email, first_name, last_name, photo, role },
      }: PayloadAction<IUser>
    ) => ({
      ...state,
      user: { id, email, first_name, last_name, photo, role },
      isAuth: true,
    }),
    logout: () => initialState,
  },
});

export default authSlice.reducer;

export const { logout, setUser, setToken } = authSlice.actions;
