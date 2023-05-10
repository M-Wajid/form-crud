import React, { useState } from 'react'
import GenericModal from '../generic/modal'
import GenericForm from '../generic/form';
import {fields} from "../../data/fieldsData";
import { validate } from './../helper/index';

const AddUser = ({users,setUsers}) => {
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [error, setError] = useState({});

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

  const handleClose = () => {
    setNewUser({});
    setError({});
    setShow(false);
  }

  const onClickHandler = () => {
    const isValid = validate(validationData, newUser, setError);
    console.log(newUser);
    if (isValid) {
      setUsers([...users, newUser]);
      handleClose();
    }
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

  return (
    <>
    <GenericModal
      show={show}
      title="User Data"
      body={<GenericForm fields={fields} changeHandler={changeHandler} blurHandler={blurHandler} error={error}/>}
      mainFunc={onClickHandler}
      closeFunc={handleClose}
    />
      <button className="buttonClass" onClick={() => setShow(true)}>
        Add
      </button>
    </>
    
  )
}

export default AddUser