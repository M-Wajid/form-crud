import "./App.css";
import data from "./data/usersData.json";
import { useState } from "react";
import AddUser from "./components/addUser";
import DisplayUsers from "./components/displayUsers";

function App() {
  const [users, setUsers] = useState(data);

  return (
    <div className="App">
      <AddUser users={users} setUsers={setUsers} />
      <DisplayUsers users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
