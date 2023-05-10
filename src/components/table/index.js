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
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.confirmPassword}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.gender}</td>
              <td>{item.nationality}</td>
              <td>
                {item.skills.map((skill) => (
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
