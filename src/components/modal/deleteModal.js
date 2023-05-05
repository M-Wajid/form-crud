import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteModal = (props) => {
  const { show, setShow, currentUserIndex, users, setUsers } = props;

  const handleClose = () => setShow(false);

  const onClickHandler = () => {
    let tempData = [...users];
    tempData.splice(currentUserIndex, 1);
    setUsers(tempData);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClickHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
