export const fields = [
  {
    title: "Name",
    name: "name",
    type: "text",
    placeholder: "John",
  },
  {
    title: "Email",
    name: "email",
    type: "email",
    placeholder: "john@email.com",
  },
  {
    title: "Password",
    name: "password",
    type: "text",
    placeholder: "John#123",
  },
  {
    title: "Confirm Password",
    name: "confirmPassword",
    type: "text",
    placeholder: "John#123",
  },
  {
    title: "Date of Birth",
    name: "dateOfBirth",
    type: "date",
    max: new Date().toISOString().split("T")[0]
  },
  {
    title: "Gender",
    type:"radio",
    name:"gender",
    options: [
      {
        value:"Male",
        label:"Male"
      },
      {
        value:"Female",
        label:"Female"
      }
    ]  
  },
  {
    title: "Nationality",
    name:"nationality",
    type:"select", 
    options: [
      {
        value: "",
        label: "Please Select Complexity"
      },
      {
        value: "American",
        label: "American"
      },
      {
        value: "Australian",
        label: "Australian"
      },
      {
        value: "Canadian",
        label: "Canadian"
      },
      {
        value: "Pakistani",
        label: "Pakistani"
      }
    ]  
  },
  {
    title: "Skills",
    name:"skills",
    type:"checkbox", 
    options: [
      {
        value: "JavaScript",
        label: "JavaScript"
      },
      {
        value: "HTML",
        label: "HTML"
      },
      {
        value: "CSS",
        label: "CSS"
      },
      {
        value: "C++",
        label: "C++"
      },
      {
        value: "React.js",
        label: "React.js"
      },
      {
        value: "Node.js",
        label: "Node.js"
      },
      {
        value: "Express.js",
        label: "Express.js"
      }
    ]  
  }
]
              
               