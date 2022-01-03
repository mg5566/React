import styles from "./UsersList.module.css";

import Card from "../UI/Card.js";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              <div>{user.name} ({user.age} years old)</div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
