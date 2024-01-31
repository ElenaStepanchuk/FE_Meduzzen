import css from "./page.module.css";

async function Home() {
  return (
    <div className={css.container}>
      <p className={css.text}>Hello!!!</p>
      <p className={css.text}>Welcome to my project!</p>
    </div>
  );
}
export default Home;
