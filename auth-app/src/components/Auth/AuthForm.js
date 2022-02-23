import { useContext, useRef, useState } from "react";

import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandle = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: validation
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPcd_i8PTVqWAjy5Ce1Ja5IGRqyq9fh_c";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPcd_i8PTVqWAjy5Ce1Ja5IGRqyq9fh_c";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // show an error modal
            let errorMessage = "Authentication Failed";
            console.log(data);
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="input your Email"
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="input your password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.action}>
          {!isLoading ? (
            <button>{isLogin ? "Login" : "Create New Account"}</button>
          ) : (
            <p>Loading...(Sending Request)</p>
          )}
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