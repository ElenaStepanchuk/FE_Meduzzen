import css from "./navigation.module.css";
import { NavList } from "..";

const Navigation = () => {
  return (
    <div className={css.container}>
      <NavList />
    </div>
  );
};

export default Navigation;
