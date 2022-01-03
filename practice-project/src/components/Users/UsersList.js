import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              <div>{item.userName}</div>
              <div>{item.age}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
