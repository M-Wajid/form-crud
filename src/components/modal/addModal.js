import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { validate } from "../helper";

const AddModal = ({ users, setUsers }) => {
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

  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [error, setError] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setError({});
    setNewUser({});
  };

  const onChangeHandler = (event) => {
    if (event.target.name === "Skills") {
      let checkTemp = { ...newUser };
      event.target.checked
        ? !checkTemp.Skills
          ? (checkTemp.Skills = [event.target.value])
          : checkTemp.Skills.push(event.target.value)
        : (checkTemp.Skills = checkTemp.Skills.filter(
            (el) => el !== event.target.value
          ));
      setNewUser(checkTemp);
    } else {
      setNewUser({
        ...newUser,
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
    const isValid = validate(validationData, newUser, setError);
    console.log(newUser);
    if (isValid) {
      setUsers([...users, newUser]);
      setNewUser({});
      handleClose();
    }
  };

  return (
    <>
      <button className="buttonClass" onClick={handleShow}>
        Add
      </button>

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
                placeholder="John"
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
                placeholder="john@email.com"
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
                placeholder="John123"
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
                placeholder="John123"
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
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="radio"
                name="Gender"
                label="Female"
                value="Female"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              {error && error.Gender && (
                <Form.Label className="errorStyle">{error.Gender}</Form.Label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nationality</Form.Label>
              <select
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
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="JavaScript"
                value="JavaScript"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="HTML"
                value="HTML"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="CSS"
                value="CSS"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="Node.js"
                value="Node.js"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="Express.js"
                value="Express.js"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
              <FormCheck
                type="checkbox"
                name="Skills"
                label="C++"
                value="C++"
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
export default AddModal;
