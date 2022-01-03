import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("addUserHandler", enteredUserName, enteredAge);
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "올바른 입력을 하라 시팔",
        message:
          "User Name 과 Age 를 똑바로 입려하고 추가하기를 누르렴 빡치게 하지 마렴",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "나이가 올바르지 않단다",
        message:
          "나이가 음수가 될 수 있겠니? 다시 생각하고 추가하기를 클릭하렴",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    errorHandler();
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setEnteredUserName("");
    setEnteredAge("");
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          {/* <button type="submit">Add User</button> */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
