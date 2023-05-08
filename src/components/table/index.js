import React, { useState } from "react";
import DeleteModal from "../modal/deleteModal";
import EditModal from "../modal/editModal";

const TableComp = ({ users, setUsers }) => {
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [editItem, setEditItem] = useState();
  const [deleteIndex, setDeleteIndex] = useState();

  const edit = (item, i) => {
    setEditIndex(i);
    setEditItem(item);
    setEditShow(true);
  };

  const deleteFunc = (i) => {
    setDeleteIndex(i);
    setDeleteShow(true);
  };

  return (
    <>
      <DeleteModal
        show={deleteShow}
        setShow={setDeleteShow}
        currentUserIndex={deleteIndex}
        users={users}
        setUsers={setUsers}
      />
      <EditModal
        show={editShow}
        setShow={setEditShow}
        editItem={editItem}
        setEditItem={setEditItem}
        editIndex={editIndex}
        users={users}
        setUsers={setUsers}
      />
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Skills</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, i) => (
            <tr>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Password}</td>
              <td>{item.ConfirmPassword}</td>
              <td>{item.DoB}</td>
              <td>{item.Gender}</td>
              <td>{item.Nationality}</td>
              <td>
                {item.Skills.map((skill) => (
                  <>{skill}, </>
                ))}
              </td>
              <td>
                <button
                  className="buttonClass"
                  onClick={() => edit(item, i)}
                >
                  Edit
                </button>
                <button className="buttonClass" onClick={() => deleteFunc(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableComp;
