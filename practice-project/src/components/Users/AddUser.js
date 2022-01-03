import { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const inputName = nameInputRef.current.value;
    const inputAge = ageInputRef.current.value;
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "올바른 입력을 하라 시팔",
        message:
          "User Name 과 Age 를 똑바로 입려하고 추가하기를 누르렴 빡치게 하지 마렴",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "나이가 올바르지 않단다",
        message:
          "나이가 음수가 될 수 있겠니? 다시 생각하고 추가하기를 클릭하렴",
      });
      return;
    }
    props.onAddUser(inputName, inputAge);
    errorHandler();
  };

  const errorHandler = () => {
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    setError();
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
