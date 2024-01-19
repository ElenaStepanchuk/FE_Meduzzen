"use client";
import css from "./navList.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "..";

export const AuthMenu = (logoutUser: any, user: any) => {
  const pathname: string = usePathname();
  return (
    <div className={css.auth_menu__container}>
      <Link
        className={pathname === "/users" ? css.active : css.nav_item}
        href="/users"
      >
        Users
      </Link>
      <Link
        className={pathname === "/profile" ? css.active : css.nav_item}
        href="/profile"
      >
        Profile
      </Link>
      <Link
        className={pathname === "/companies" ? css.active : css.nav_item}
        href="/companies"
      >
        Companies
      </Link>
      <Link
        className={pathname === "/company" ? css.active : css.nav_item}
        href="/company"
      >
        Company
      </Link>
      <p className={css.user_name}>
        Welcome, {user?.first_name || user?.email}
      </p>
      <Button
        onClick={logoutUser}
        type={"button"}
        buttonWidth={"80px"}
        borderRadius={"20px"}
        buttonBottom={"calc(100% - 120px)"}
        buttonLeft={"calc(100% - 140px)"}
      >
        {"Logout"}
      </Button>
      <Button
        // onClick={}
        type={"button"}
        buttonWidth={"80px"}
        borderRadius={"20px"}
        buttonBottom={"calc(100% - 220px)"}
        buttonLeft={"calc(100% - 140px)"}
      >
        <a href="/api/auth/logout">Logout auth0</a>
      </Button>
    </div>
  );
};
