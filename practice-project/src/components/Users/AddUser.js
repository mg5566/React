import styles from "./AddUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("addUserHandler");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        {/* <button type="submit">Add User</button> */}
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
