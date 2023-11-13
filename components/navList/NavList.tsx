"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import css from "./navList.module.css";

const NavList = () => {
  const pathname = usePathname();

  return (
    <div className={css.nav_container}>
      <Link className={pathname === "/" ? css.active : css.nav_item} href="/">
        Home
      </Link>
      <Link
        className={pathname === "/about" ? css.active : css.nav_item}
        href="/about"
      >
        About
      </Link>
      <Link
        className={pathname === "/registration" ? css.active : css.nav_item}
        href="/registration"
      >
        User registration
      </Link>
      <Link
        className={pathname === "/authorization" ? css.active : css.nav_item}
        href="/authorization"
      >
        User authorization
      </Link>
      <Link
        className={pathname === "/users" ? css.active : css.nav_item}
        href="/users"
      >
        List of users
      </Link>
      <Link
        className={pathname === "/profile" ? css.active : css.nav_item}
        href="/profile"
      >
        User Profile
      </Link>
      <Link
        className={pathname === "/companies" ? css.active : css.nav_item}
        href="/companies"
      >
        List of companies
      </Link>
      <Link
        className={pathname === "/company" ? css.active : css.nav_item}
        href="/company"
      >
        Company Profile
      </Link>
    </div>
  );
};

export default NavList;
