import css from "./navigation.module.css";
import { NavList } from "..";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { RefreshUser } from "@/redux/auth/authOperations";

const Navigation = async () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(RefreshUser());
  // }, [dispatch]);

  return (
    <div className={css.container}>
      <NavList />
    </div>
  );
};

export default Navigation;
