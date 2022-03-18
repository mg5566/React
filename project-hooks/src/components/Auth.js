import Card from "./UI/Card";

const Auth = (props) => {
  const loginHandler = () => {};

  return (
    <div>
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={loginHandler}>Log In</button>
      </Card>
    </div>
  );
};

export default Auth;
