import css from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={css.container}>
      <p className={css.text}>Hello!!!</p>
      <p className={css.text}>Welcome to my project!</p>
      <p className={css.text}>Let`s go to the app!</p>
      <Link className={css.link} href="/authorization">
        Login in app!
      </Link>
    </div>
  );
}
