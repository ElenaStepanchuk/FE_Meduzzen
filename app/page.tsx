import css from "./page.module.css";

export default function Home() {
  return (
    // <main className={css.main}>
    <div className={css.container}>
      <p className={css.text}>Hello!</p>
      <p className={css.text}>Welcome to my project!</p>
      <h1 className={css.tittleText}>Task 1 - FE-1-init-application.</h1>
    </div>
    // </main>
  );
}
