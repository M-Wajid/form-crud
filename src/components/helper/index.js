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