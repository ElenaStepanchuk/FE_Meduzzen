"use client";
import css from "./navList.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, Loader } from "..";
import { useLogoutMutation } from "@/redux/api/authApi";
import { GetFromLocalstorageToken } from "@/utils/getFromLocalstorage.util";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useEffect } from "react";
import { setIsAuth } from "@/redux/slice/authSlice";
import { useUser } from "@auth0/nextjs-auth0/client";

export const AuthMenu = () => {
  const { user } = useUser();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isAuth } = useAppSelector((state) => state.auth);
  useEffect(() => {}, [isAuth]);

  const [logout, { isLoading }] = useLogoutMutation();
  const pathname: string = usePathname();

  const logoutUser = async () => {
    const token = localStorage.getItem("accessToken");
    await logout(token);
    dispatch(setIsAuth(false));
    router.push("/");
  };

  const currentUser = GetFromLocalstorageToken("currentUser");

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className={css.auth_menu__container}>
        <Link
          className={pathname === "/users" ? css.active : css.nav_item}
          href="/users"
        >
          Users
        </Link>
        {!user ? (
          <Link
            className={pathname === "/profile" ? css.active : css.nav_item}
            href="/profile"
          >
            Profile
          </Link>
        ) : (
          <Link
            className={
              pathname === "/dashboard/subscriber" ? css.active : css.nav_item
            }
            href="/subscriber"
          >
            Profile
          </Link>
        )}
        <Link
          className={
            pathname === "/dashboard/companies" ? css.active : css.nav_item
          }
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
        <p className={css.user_name}>Welcome, {currentUser || user?.name}</p>
        {currentUser && (
          <Button
            onClick={logoutUser}
            type={"button"}
            buttonWidth={"80px"}
            borderRadius={"20px"}
            buttonBottom={"calc(100% - 120px)"}
            buttonLeft={"calc(100% - 144px)"}
          >
            {"Logout"}
          </Button>
        )}
      </div>
      {user && (
        <Button
          type={"button"}
          buttonWidth={"80px"}
          borderRadius={"20px"}
          buttonBottom={"calc(100% - 120px)"}
          buttonLeft={"calc(100% - 96px)"}
        >
          <a className={css.link_auth0} href="/api/auth/logout">
            Logout
          </a>
        </Button>
      )}
    </>
  );
};
