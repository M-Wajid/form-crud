import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { validate } from "../helper";
import {fields} from "./../data/fieldsData";
import GenericForm from "../form";

const AddModal = ({ users, setUsers }) => {
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

  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [error, setError] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setError({});
    setNewUser({});
  };

  const changeHandler = (event) => {
    if (event.target.name === "skills") {
      let checkTemp = { ...newUser };
      event.target.checked
        ? !checkTemp.skills
          ? (checkTemp.skills = [event.target.value])
          : checkTemp.skills.push(event.target.value)
        : (checkTemp.skills = checkTemp.skills.filter(
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

  const blurHandler = (event) => {
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
          <GenericForm fields={fields} changeHandler={changeHandler} blurHandler={blurHandler} error={error}/>
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
