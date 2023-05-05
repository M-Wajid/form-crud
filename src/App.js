import "./App.css";
import TableComp from "./components/table";
import data from "./components/data/usersData.json";
import AddModal from "./components/modal/addModal";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(data);

  return (
    <div className="App">
      <br />
      <AddModal users={users} setUsers={setUsers} />
      <br />
      <br />
      <TableComp users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
