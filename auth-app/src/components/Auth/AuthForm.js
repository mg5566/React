import { useRef, useState } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPcd_i8PTVqWAjy5Ce1Ja5IGRqyq9fh_c",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          console.log("success Login");
        } else {
          return res.json().then((data) => {
            // show an error modal
            let errorMessage = "Authentication Failed";
            console.log(data);
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPcd_i8PTVqWAjy5Ce1Ja5IGRqyq9fh_c",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          // ...
          setIsLogin((prevState) => !prevState);
          console.log("success Sign up");
        } else {
          return res.json().then((data) => {
            // show an error modal
            let errorMessage = "Authentication Failed";
            console.log(data);
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    }
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
