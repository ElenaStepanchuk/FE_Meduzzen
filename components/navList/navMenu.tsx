"use client";
import Link from "next/link";

import css from "./navList.module.css";
import { usePathname } from "next/navigation";

export const NavMenu = () => {
  const pathname: string = usePathname();
  return (
    <div className={css.nav_menu__container}>
      <Link className={pathname === "/" ? css.active : css.nav_item} href="/">
        Home
      </Link>
      <Link
        className={pathname === "/about" ? css.active : css.nav_item}
        href="/about"
      >
        About
      </Link>
    </div>
  );
};
