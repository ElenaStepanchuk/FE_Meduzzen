import Link from "next/link";

import css from "./navList.module.css";

const NavList = () => {
  return (
    <div className={css.nav_container}>
      <Link className={css.nav_item} href="/">
        Home
      </Link>
      <Link className={css.nav_item} href="/registration">
        User registration
      </Link>
      <Link className={css.nav_item} href="/authorization">
        User authorization
      </Link>
      <Link className={css.nav_item} href="/users">
        List of users
      </Link>
      <Link className={css.nav_item} href="/profile">
        User Profile
      </Link>
      <Link className={css.nav_item} href="/companies">
        List of companies
      </Link>
      <Link className={css.nav_item} href="/company">
        Company Profile
      </Link>
    </div>
  );
};

export default NavList;
