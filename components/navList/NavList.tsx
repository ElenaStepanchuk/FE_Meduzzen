"use client";
import { isAuthState, userState } from "@/redux/auth/authSelectors";

import { logout } from "@/redux/auth/authSlice";

import css from "./navList.module.css";
import { Logout } from "@/redux/auth/authOperations";

import { UserMenu } from "./userMenu";
import { AuthMenu } from "./authMenu";
import { NavMenu } from "./navMenu";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

const NavList = () => {
  const authState: boolean = useAppSelector(isAuthState);
  const currentUser: any = useAppSelector(userState);

  const dispatch = useAppDispatch();

  const logoutUser = async () => {
    await Logout();
    dispatch(logout());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("actionToken");
    localStorage.setItem("isAuth", "true");
  };
  return (
    <div className={css.nav_container}>
      {NavMenu()}
      {!authState ? UserMenu() : AuthMenu(logoutUser, currentUser)}
    </div>
  );
};

export default NavList;
