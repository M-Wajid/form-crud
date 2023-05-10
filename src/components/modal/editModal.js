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
      name: "Name",
      regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
      errorMessage: "Please Enter a valid Name",
    },
    {
      name: "Email",
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      errorMessage: "Please Enter a valid Email",
    },
    {
      name: "Password",
      regex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      errorMessage:
        "Invalid Password! , Password must contain minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    },
    {
      name: "ConfirmPassword",
      regex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      errorMessage: "Password didn't Match",
    },
    {
      name: "DoB",
      regex: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
      errorMessage: `Please enter your date of birth`,
    },
    {
      name: "Gender",
      regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
      errorMessage: `Please select your gender`,
    },
    {
      name: "Nationality",
      regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
      errorMessage: `Please select your nationality`,
    },
    {
      name: "Skills",
      errorMessage: `Please select atleast one skill`,
    },
  ];

  const onChangeHandler = (event) => {
    if (event.target.name === "Skills") {
      let temp = { ...editItem };
      event.target.checked
        ? (temp.Skills = temp.Skills.concat([event.target.value]))
        : // ? temp.Skills.push(event.target.value)
          (temp.Skills = temp.Skills.filter((el) => el !== event.target.value));
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
                name="Name"
                type="text"
                defaultValue={editItem?.Name}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.Name && (
                <Form.Label className="errorStyle">{error.Name}</Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <input
                className="form-control"
                name="Email"
                type="email"
                defaultValue={editItem?.Email}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.Email && (
                <Form.Label className="errorStyle">{error.Email}</Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <input
                className="form-control"
                type="text"
                name="Password"
                defaultValue={editItem?.Password}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.Password && (
                <Form.Label className="errorStyle">{error.Password}</Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <input
                className="form-control"
                name="ConfirmPassword"
                type="text"
                defaultValue={editItem?.ConfirmPassword}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.ConfirmPassword && (
                <Form.Label className="errorStyle">
                  {error.ConfirmPassword}
                </Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <input
                className="form-control"
                name="DoB"
                type="date"
                defaultValue={editItem?.DoB}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.DoB && (
                <Form.Label className="errorStyle">{error.DoB}</Form.Label>
              )}
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
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="radio"
                name="Gender"
                label="Female"
                value="Female"
                checked={editItem?.Gender === "Female"}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
            </Form.Group>
            {error && error.Gender && (
              <Form.Label className="errorStyle">{error.Gender}</Form.Label>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Nationality</Form.Label>
              <select
                value={editItem?.Nationality}
                className="form-control"
                name="Nationality"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              >
                <option value="">Please Select Nationality</option>
                <option value="American">American</option>
                <option value="Canadian">Canadian</option>
                <option value="Indian">Indian</option>
                <option value="Pakistani">Pakistani</option>
              </select>
              {error && error.Nationality && (
                <Form.Label className="errorStyle">
                  {error.Nationality}
                </Form.Label>
              )}
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
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="JavaScript"
                value="JavaScript"
                checked={editItem?.Skills.includes("JavaScript")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="HTML"
                value="HTML"
                checked={editItem?.Skills.includes("HTML")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="CSS"
                value="CSS"
                checked={editItem?.Skills.includes("CSS")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="Node.js"
                value="Node.js"
                checked={editItem?.Skills.includes("Node.js")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="Express.js"
                value="Express.js"
                checked={editItem?.Skills.includes("Express.js")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="C++"
                value="C++"
                checked={editItem?.Skills.includes("C++")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="None"
                value="None"
                checked={editItem?.Skills.includes("None")}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.Skills && (
                <Form.Label className="errorStyle">{error.Skills}</Form.Label>
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
