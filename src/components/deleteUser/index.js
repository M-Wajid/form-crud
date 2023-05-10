import React from 'react'
import GenericModal from './../generic/modal/index';

const DeleteUser = (props) => {
  const { show, setShow, currentUserIndex, users, setUsers } = props;
  const handleClose = () => setShow(false);

  const onClickHandler = () => {
    let tempData = [...users];
    tempData.splice(currentUserIndex, 1);
    setUsers(tempData);
    handleClose();
  };
  
  return (
    <GenericModal
      show={show}
      title="Delete"
      body="Are you sure, you want to delete this user permanently"
      mainFunc={onClickHandler}
      closeFunc={handleClose}
    />
  )
}

export default DeleteUser