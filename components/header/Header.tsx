// import Link from "next/link";
import { Navigation } from "..";

import css from "./header.module.css";

const Header = () => {
  return (
    <header className={css.container}>
      <Navigation />
    </header>
  );
};

export default Header;
