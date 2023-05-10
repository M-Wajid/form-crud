import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FormCheck } from "react-bootstrap";
import { useState } from "react";
import { validate } from "../helper";

const EditModal = (props) => {
  let { show, setShow, editItem, setEditItem, editIndex, users, setUsers } =
    props;
  const [error, setError] = useState({});
  const handleClose = () => {
    setShow(false)
    setError({});
  };

  const validationData = [
    {
      name: "name",
      regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
      errorMessage: "Please Enter a valid Name",
    },
    {
      name: "email",
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      errorMessage: "Please Enter a valid Email",
    },
    {
      name: "password",
      regex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      errorMessage:
        "Invalid Password! , Password must contain minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    },
    {
      name: "confirmPassword",
      regex: 
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      errorMessage: "Password didn't Match",
    },
    {
      name: "dateOfBirth",
      regex: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
      errorMessage: `Please enter your date of birth`,
    },
    {
      name: "gender",
      regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
      errorMessage: `Please select your gender`,
    },
    {
      name: "nationality",
      regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
      errorMessage: `Please select your nationality`,
    },
    {
      name: "skills",
      errorMessage: `Please select atleast one skill`,
    },
  ];

  const onChangeHandler = (event) => {
    if (event.target.name === "skills") {
      let temp = { ...editItem };
      event.target.checked
        ? (temp.skills = temp.skills.concat([event.target.value]))
        : // ? temp.Skills.push(event.target.value)
          (temp.skills = temp.skills.filter((el) => el !== event.target.value));
      setEditItem(temp);
    } else {
      setEditItem({
        ...editItem,
        [event.target.name]: event.target.value,
      });
    }
  };

  const onBlurHandler = (event) => {
    if (!event.target.value.trim()) {
      setError({
        ...error,
        [event.target.name]: `Please enter ${event.target.name}`,
      });
    } else {
      const tempError = { ...error };
      delete tempError[event.target.name];
      setError(tempError);
    }
  };

  const onClickHandler = () => {
    const isValid = validate(validationData, editItem, setError);
    if (isValid){
      let tempUsers = [...users];
      tempUsers.splice(editIndex, 1, editItem);
      setUsers(tempUsers);
      // setEditItem();
      handleClose();
    }
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
                name="name"
                type="text"
                defaultValue={editItem?.name}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.name && (
                <Form.Label className="errorStyle">{error.name}</Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <input
                className="form-control"
                name="email"
                type="email"
                defaultValue={editItem?.email}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.email && (
                <Form.Label className="errorStyle">{error.email}</Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <input
                className="form-control"
                type="text"
                name="password"
                defaultValue={editItem?.password}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.password && (
                <Form.Label className="errorStyle">{error.password}</Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <input
                className="form-control"
                name="confirmPassword"
                type="text"
                defaultValue={editItem?.confirmPassword}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.confirmPassword && (
                <Form.Label className="errorStyle">
                  {error.confirmPassword}
                </Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <input
                className="form-control"
                name="dateOfBirth"
                type="date"
                defaultValue={editItem?.dateOfBirth}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.dateOfBirth && (
                <Form.Label className="errorStyle">{error.dateOfBirth}</Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <FormCheck
                type="radio"
                name="gender"
                label="Male"
                value="Male"
                checked={editItem?.gender === "Male"}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="radio"
                name="gender"
                label="Female"
                value="Female"
                checked={editItem?.gender === "Female"}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
            </Form.Group>
            {error && error.gender && (
              <Form.Label className="errorStyle">{error.gender}</Form.Label>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Nationality</Form.Label>
              <select
                value={editItem?.nationality}
                className="form-control"
                name="nationality"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              >
                <option value="">Please Select Nationality</option>
                <option value="American">American</option>
                <option value="Canadian">Canadian</option>
                <option value="Indian">Indian</option>
                <option value="Pakistani">Pakistani</option>
              </select>
              {error && error.nationality && (
                <Form.Label className="errorStyle">
                  {error.nationality}
                </Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Skills</Form.Label>
              <FormCheck
                type="checkbox"
                name="skills"
                label="React.js"
                value="React.js"
                checked={editItem?.skills.includes("React.js")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="skills"
                label="JavaScript"
                value="JavaScript"
                checked={editItem?.skills.includes("JavaScript")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="skills"
                label="HTML"
                value="HTML"
                checked={editItem?.skills.includes("HTML")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="skills"
                label="CSS"
                value="CSS"
                checked={editItem?.skills.includes("CSS")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="skills"
                label="Node.js"
                value="Node.js"
                checked={editItem?.skills.includes("Node.js")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="skills"
                label="Express.js"
                value="Express.js"
                checked={editItem?.skills.includes("Express.js")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="skills"
                label="C++"
                value="C++"
                checked={editItem?.skills.includes("C++")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="skills"
                label="None"
                value="None"
                checked={editItem?.skills.includes("None")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.skills && (
                <Form.Label className="errorStyle">{error.skills}</Form.Label>
              )}
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
