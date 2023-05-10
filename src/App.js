import "./App.css";
import TableComp from "./components/table";
import data from "./data/usersData.json";
import { useState } from "react";
import AddUser from "./components/addUser";

function App() {
  const [users, setUsers] = useState(data);

  return (
    <div className="App">
      <AddUser users={users} setUsers={setUsers} />
      <TableComp users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
