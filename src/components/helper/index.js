export const validate = (validationData, newUser, setError) => {
  let err = {};
  validationData.length !== 0 &&
    validationData.forEach((item) => {
      if (item.name === "Skills") {
        if (!newUser[item.name] || newUser?.Skills.length === 0) {
          err[item.name] = item.errorMessage;
        }
      } else {
        if (!newUser[item.name] || !item.regex.test(newUser[item.name])) {
          err[item.name] = item.errorMessage;
        }
      }
    });

  setError({ ...err });
  console.log(err);
  return Object.keys(err).length === 0;
};