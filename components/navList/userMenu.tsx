"use client";
import css from "./navList.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const UserMenu = () => {
  const pathname: string = usePathname();
  return <div className={css.user_menu__container}></div>;
};
