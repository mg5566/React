import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const UsersData = [
    {
      id: 0,
      userName: 'mike',
      age: 30,
    },
  ];
  return (
    <div>
      <AddUser />
      <UsersList items={UsersData} />
    </div>
  );
}

export default App;
