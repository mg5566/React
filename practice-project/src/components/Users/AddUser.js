import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("addUserHandler", enteredUserName, enteredAge);
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      return ;
    }
    if (+enteredAge < 1) {
      setIsValid(false);
      return ;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge('');
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
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
  );
};

export default AddUser;
