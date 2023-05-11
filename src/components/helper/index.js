import {upperFirst, lowerCase} from 'lodash';

export const validate = (fields, User, setError) => {
  let err = {};
  fields.length !== 0 &&
    fields.forEach((item) => {
      if(item.type === "checkbox"){
        if (!User[item.name] || User[item.name].length === 0) {
          err[item.name] = item.errorMessage;
        }
      }else{
        if(item.name === "confirmPassword"){
          if(User.confirmPassword !== User.password){
            err[item.name] = item.errorMessage;
          }
        }else {
          if (!User[item.name] || !item.regex.test(User[item.name])) {
            err[item.name] = item.errorMessage;
          }
        }
      }

      // if (item.name === "skills") {
      //   if (!User[item.name] || User?.skills.length === 0) {
      //     err[item.name] = item.errorMessage;
      //   }
      // } else if(item.name === "confirmPassword"){
      //   if(User.confirmPassword !== User.password){
      //     err[item.name] = item.errorMessage;
      //   }
      // }else {
      //   if (!User[item.name] || !item.regex.test(User[item.name])) {
      //     err[item.name] = item.errorMessage;
      //   }
      // }
    });

  setError({ ...err });
  console.log(err);
  return Object.keys(err).length === 0;
};


export const settingOnBlurFormData = (event, error, setError) => {
  if (!event.target.value.trim()) {
    setError({
      ...error,
      [event.target.name]: `Please enter ${upperFirst(lowerCase(event.target.name))}`,
    });
  } else {
    const tempError = { ...error };
    delete tempError[event.target.name];
    setError(tempError);
  }
};

export const settingOnChangeFormData = (event,formData,setFormData) => {
  if (event.target.type === "checkbox") {
    let checkTemp = { ...formData };
    event.target.checked
      ? !checkTemp[event.target.name]
        ? (checkTemp[event.target.name] = [event.target.value])
        : (checkTemp[event.target.name] = checkTemp[event.target.name].concat([event.target.value]))
      : (checkTemp[event.target.name] = checkTemp[event.target.name].filter(
          (el) => el !== event.target.value
        ));
    setFormData(checkTemp);
  } else {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
};

