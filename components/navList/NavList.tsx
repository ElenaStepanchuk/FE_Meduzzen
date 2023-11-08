import Link from "next/link";

import css from "./navList.module.css";

const NavList = () => {
  return (
    <div className={css.nav_container}>
      <Link className={css.nav_item} href="/">
        Home
      </Link>
      <Link className={css.nav_item} href="/userRegistration">
        User registration
      </Link>
      <Link className={css.nav_item} href="/userAuthorization">
        User authorization
      </Link>
      <Link className={css.nav_item} href="/listOfUsers">
        List of users
      </Link>
      <Link className={css.nav_item} href="/userProfile">
        User Profile
      </Link>
      <Link className={css.nav_item} href="/listOfCompanies">
        List of companies
      </Link>
      <Link className={css.nav_item} href="/companyProfile">
        Company Profile
      </Link>
    </div>
  );
};

export default NavList;
