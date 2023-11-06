import css from "./page.module.css";

const StartPage = () => {
  return (
    <div className={css.container}>
      <p className={css.hello}>Hello!</p>
      <h1 className={css.welcome}>
        Welcome to my project task 1 - FE-1-init-application
      </h1>
    </div>
  );
};
export default StartPage;
