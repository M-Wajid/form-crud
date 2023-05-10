import { useState } from 'react';
import GenericTable from '../generic/table'
import EditUser from '../editUser';
import DeleteUser from '../deleteUser';

const DisplayUsers = ({users, setUsers}) => {
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [editItem, setEditItem] = useState();
  const [deleteIndex, setDeleteIndex] = useState();

  const tableHeadings = [
    "Name",
    "Email",
    "Password",
    "Confirm Password",
    "Date of Birth",
    "Gender",
    "Nationality",
    "Skills",
    "Actions"
  ]

  const editFunc = (item, i) => {
    setEditIndex(i);
    setEditItem(item);
    setEditShow(true);
  };

  const deleteFunc = (i) => {
    setDeleteIndex(i);
    setDeleteShow(true);
  };

  const actions = { 
    edit: editFunc,
    delete: deleteFunc
  }

  return (
    <>
      <DeleteUser
        show={deleteShow}
        setShow={setDeleteShow}
        currentUserIndex={deleteIndex}
        users={users}
        setUsers={setUsers}
      />
      <EditUser
        show={editShow}
        setShow={setEditShow}
        editItem={editItem}
        setEditItem={setEditItem}
        editIndex={editIndex}
        users={users}
        setUsers={setUsers}
      />
        <GenericTable 
        tableHeadings={tableHeadings}
        tableData={users}
        actions={actions}
      />
    </>
    
  )
}

export default DisplayUsers