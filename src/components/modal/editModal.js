import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FormCheck } from "react-bootstrap";

const EditModal = (props) => {
  let { show, setShow, editItem, setEditItem, editIndex, users, setUsers } =
    props;
  console.log(editItem, users);
  const handleClose = () => setShow(false);

  const onChangeHandler = (event) => {
    if (event.target.name === "Skills") {
      let temp = { ...editItem };
      event.target.checked
        ? temp.Skills = temp.Skills.concat([event.target.value])
        // ? temp.Skills.push(event.target.value)
        : (temp.Skills = temp.Skills.filter((el) => el !== event.target.value));
      setEditItem(temp);
    } else {
      setEditItem({
        ...editItem,
        [event.target.name]: event.target.value,
      });
    }
  };

  const onClickHandler = () => {
    let tempUsers = [...users];
    tempUsers.splice(editIndex, 1, editItem);
    setUsers(tempUsers);
    // setEditItem();
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <input
                className="form-control"
                name="Name"
                type="text"
                defaultValue={editItem?.Name}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <input
                className="form-control"
                name="Email"
                type="email"
                defaultValue={editItem?.Email}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <input
                className="form-control"
                type="text"
                name="Password"
                defaultValue={editItem?.Password}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <input
                className="form-control"
                name="ConfirmPassword"
                type="text"
                defaultValue={editItem?.ConfirmPassword}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <input
                className="form-control"
                name="DoB"
                type="date"
                defaultValue={editItem?.DoB}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <FormCheck
                type="radio"
                name="Gender"
                label="Male"
                value="Male"
                checked={editItem?.Gender === "Male"}
                onChange={onChangeHandler}
              />
              <FormCheck
                type="radio"
                name="Gender"
                label="Female"
                value="Female"
                checked={editItem?.Gender === "Female"}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nationality</Form.Label>
              <select
                value={editItem?.Nationality}
                className="form-control"
                name="Nationality"
                onChange={onChangeHandler}
              >
                <option>Please Select Nationality</option>
                <option value="American">American</option>
                <option value="Canadian">Canadian</option>
                <option value="Indian">Indian</option>
                <option value="Pakistani">Pakistani</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Skills</Form.Label>
              <FormCheck
                type="checkbox"
                name="Skills"
                label="React.js"
                value="React.js"
                checked={editItem?.Skills.includes("React.js")}
                onChange={onChangeHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="JavaScript"
                value="JavaScript"
                checked={editItem?.Skills.includes("JavaScript")}
                onChange={onChangeHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="HTML"
                value="HTML"
                checked={editItem?.Skills.includes("HTML")}
                onChange={onChangeHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="CSS"
                value="CSS"
                checked={editItem?.Skills.includes("CSS")}
                onChange={onChangeHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="Node.js"
                value="Node.js"
                checked={editItem?.Skills.includes("Node.js")}
                onChange={onChangeHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="Express.js"
                value="Express.js"
                checked={editItem?.Skills.includes("Express.js")}
                onChange={onChangeHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="C++"
                value="C++"
                checked={editItem?.Skills.includes("C++")}
                onChange={onChangeHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClickHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
