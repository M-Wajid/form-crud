import { useState } from 'react'
import GenericForm from '../generic/form'
import GenericModal from './../generic/modal/index';
import {fields} from "../../data/fieldsData";
import { validate } from '../helper';

const EditUser = (props) => {
  const {show, setShow, editItem, setEditItem, editIndex, users, setUsers } = props;
  const [error, setError] = useState({});
  // const validationData = [
  //   {
  //     name: "name",
  //     regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
  //     errorMessage: "Please Enter a valid Name",
  //   },
  //   {
  //     name: "email",
  //     regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  //     errorMessage: "Please Enter a valid Email",
  //   },
  //   {
  //     name: "password",
  //     regex:
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
  //     errorMessage:
  //       "Invalid Password! , Password must contain minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
  //   },
  //   {
  //     name: "confirmPassword",
  //     regex: 
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
  //     errorMessage: "Password didn't Match",
  //   },
  //   {
  //     name: "dateOfBirth",
  //     regex: /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
  //     errorMessage: `Please enter your date of birth`,
  //   },
  //   {
  //     name: "gender",
  //     regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
  //     errorMessage: `Please select your gender`,
  //   },
  //   {
  //     name: "nationality",
  //     regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
  //     errorMessage: `Please select your nationality`,
  //   },
  //   {
  //     name: "skills",
  //     errorMessage: `Please select atleast one skill`,
  //   },
  // ];

  const handleClose = () => {
    setShow(false);
    setError({});
  }

  const onClickHandler = () => {
    const isValid = validate(fields, editItem, setError);
    if (isValid){
      let tempUsers = [...users];
      tempUsers.splice(editIndex, 1, editItem);
      setUsers(tempUsers);
      handleClose();
    }
  };

  const changeHandler = (event) => {
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
    <GenericModal 
      show={show}
      title="User Data"
      body={<GenericForm fields={fields} changeHandler={changeHandler} blurHandler={blurHandler} error={error} user={editItem}/>}
      mainFunc={onClickHandler}
      closeFunc={handleClose}
    />
  )
}

export default EditUser