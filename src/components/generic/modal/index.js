import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const GenericModal = (props) => {
  const { show, closeFunc, title, body, mainFunc} =
    props;

  return (
    <>
      <Modal show={show} onHide={closeFunc}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeFunc}>
            Close
          </Button>
          <Button variant="primary" onClick={mainFunc}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default GenericModal;
