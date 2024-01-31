"use client";
import css from "./navList.module.css";

import { AuthMenu } from "./authMenu";
import { NavMenu } from "./navMenu";

import { UserMenu } from "./userMenu";
import { GetFromLocalstorageStatus } from "@/utils/getFromLocalstorage.util";
import { useEffect } from "react";
import { useAppSelector } from "@/hooks/hooks";
import { useUser } from "@auth0/nextjs-auth0/client";

const NavList = () => {
  const isAuthLocal = GetFromLocalstorageStatus("isAuth");
  const { isAuth } = useAppSelector((state) => state.auth);
  const { user } = useUser();

  useEffect(() => {}, [isAuth, isAuthLocal, user]);

  return (
    <div className={css.nav_container}>
      <NavMenu />
      {isAuth || isAuthLocal || user ? <AuthMenu /> : <UserMenu />}
    </div>
  );
};

export default NavList;
