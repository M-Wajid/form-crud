export const fields = [
  {
    title: "Name",
    name: "name",
    type: "text",
    placeholder: "John",
    regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
    errorMessage: "Please Enter a valid Name",
  },
  {
    title: "Email",
    name: "email",
    type: "email",
    placeholder: "john@email.com",
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    errorMessage: "Please Enter a valid Email",
  },
  {
    title: "Password",
    name: "password",
    type: "text",
    placeholder: "John#123",
    regex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
    errorMessage:
      "Invalid Password! , Password must contain minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
  },
  {
    title: "Confirm Password",
    name: "confirmPassword",
    type: "text",
    placeholder: "John#123",
    regex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
    errorMessage: "Password didn't Match",
  },
  {
    title: "Date of Birth",
    name: "dateOfBirth",
    type: "date",
    max: new Date().toISOString().split("T")[0],
    regex: /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
    errorMessage: `Please enter your date of birth`,
  },
  {
    title: "Gender",
    type: "radio",
    name: "gender",
    regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
    errorMessage: `Please select your gender`,
    options: [
      {
        value: "Male",
        label: "Male",
      },
      {
        value: "Female",
        label: "Female",
      },
    ],
  },
  {
    title: "Nationality",
    name: "nationality",
    type: "select",
    regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
    errorMessage: `Please select your nationality`,
    options: [
      {
        value: "",
        label: "Please Select Complexity",
      },
      {
        value: "American",
        label: "American",
      },
      {
        value: "Australian",
        label: "Australian",
      },
      {
        value: "Canadian",
        label: "Canadian",
      },
      {
        value: "Pakistani",
        label: "Pakistani",
      },
    ],
  },
  {
    title: "Skills",
    name: "skills",
    type: "checkbox",
    errorMessage: `Please select atleast one skill`,
    options: [
      {
        value: "JavaScript",
        label: "JavaScript",
      },
      {
        value: "HTML",
        label: "HTML",
      },
      {
        value: "CSS",
        label: "CSS",
      },
      {
        value: "C++",
        label: "C++",
      },
      {
        value: "React.js",
        label: "React.js",
      },
      {
        value: "Node.js",
        label: "Node.js",
      },
      {
        value: "Express.js",
        label: "Express.js",
      },
    ],
  },
];
