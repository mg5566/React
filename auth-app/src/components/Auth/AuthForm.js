import { useState } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandle = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="input your Email"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="input your password"
          />
        </div>
        <div className={classes.action}>
          <button>{isLogin ? "Login" : "Create New Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandle}
          >
            {isLogin ? "Change Create New Account Mode" : "Change Login Mode"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
