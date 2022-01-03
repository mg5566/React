import "./AddUser.css";
import Card from "../UI/Card.js";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("addUserHandler");
  };

  return (
    <Card className="adduser">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
