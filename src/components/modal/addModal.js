import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddModal = ({ users, setUsers }) => {
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

  const validate = () => {
    let err = {};
    if (!newUser.Name || newUser?.Name === "") {
      err.Name = `Please enter your name`;
    }

    if (!newUser.Email || newUser?.Email === "") {
      err.Email = `Please enter your email`;
    }else{
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(!regex.test(newUser.Email)){
        err.Email = `Please enter a valid email`;
      }
    }

    if (!newUser.Password || newUser?.Password === "") {
      err.Password = `Please enter your Password`;
    }else{
      let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
      if(!regex.test(newUser.Password)){
        err.Password = "Invalid Password! , Password must contain minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      }
    }

    if (!newUser.ConfirmPassword || newUser?.ConfirmPassword === "") {
      err.ConfirmPassword = `Please confirm your password`;
    }else if(newUser.Password !== newUser.ConfirmPassword){
      err.ConfirmPassword = "Password didn't Match"
    }

    if (!newUser.DoB || newUser?.DoB === "") {
      err.DoB = `Please enter your date of birth`;
    }

    if (!newUser.Gender || newUser?.Gender === "") {
      err.Gender = `Please select your gender`;
    }

    if (!newUser.Nationality || newUser?.Nationality === "") {
      err.Nationality = `Please select your nationality`;
    }

    if (!newUser.Skills || newUser?.Skills.length === 0) {
      err.Skills = `Please select atleast one skill`;
    }
    
    setError({ ...err });
    console.log(err);
    return Object.keys(err).length === 0;
  };

  const onClickHandler = () => {
    const isValid = validate();
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
