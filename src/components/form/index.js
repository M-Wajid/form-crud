import { Form } from "react-bootstrap";

const GenericForm = (props) => {
  const { fields, changeHandler, blurHandler, error, user} = props;
  return (
    <Form>
      {fields.map((field) => {
        switch (field?.type) {
          case "text":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                <Form.Control
                  name={field?.name}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  defaultValue={user&& user[field?.name]}
                  onChange={changeHandler}
                  onBlur={blurHandler}
                  required
                />
                {error && error[field?.name] && (
                <Form.Label className="errorStyle">{error[field?.name]}</Form.Label>
              )}
              </Form.Group>
            );
          case "email":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                <Form.Control
                  name={field?.name}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  defaultValue={user&& user[field?.name]}
                  onChange={changeHandler}
                  onBlur={blurHandler}
                  required
                />
                {error && error[field?.name] && (
                <Form.Label className="errorStyle">{error[field?.name]}</Form.Label>
              )}
              </Form.Group>
            );
          case "password":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                <Form.Control
                  name={field?.name}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  defaultValue={user&& user[field?.name]}
                  onChange={changeHandler}
                  onBlur={blurHandler}
                  required
                />
                {error && error[field?.name] && (
                <Form.Label className="errorStyle">{error[field?.name]}</Form.Label>
              )}
              </Form.Group>
            );
          case "date":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                <Form.Control
                  name={field?.name}
                  type={field?.type}
                  placeholder={field?.placeholder}
                  defaultValue={user&& user[field?.name]}
                  min={field?.min}
                  onChange={changeHandler}
                  onBlur={blurHandler}
                  required
                />
                {error && error[field?.name] && (
                <Form.Label className="errorStyle">{error[field?.name]}</Form.Label>
              )}
              </Form.Group>
            );
          case "radio":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                {field?.options.map(item => 
                  <Form.Check
                  name={field?.name}
                  type={field?.type}
                  value={user&& user[field?.name]}
                  checked={user&& user[field?.name] === item.value}
                  label={item?.label}
                  onChange={changeHandler}
                  onBlur={blurHandler}
                  required
                />
                )}
                {error && error[field?.name] && (
                <Form.Label className="errorStyle">{error[field?.name]}</Form.Label>
              )}  
              </Form.Group>
            );
          case "checkbox":
            return (
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                {field?.options.map(item => 
                  <Form.Check
                  name={field?.name}
                  type={field?.type}
                  checked={user && user?.[field?.name].includes(item?.value)}
                  label={item?.label}
                  onChange={changeHandler}
                  onBlur={blurHandler}
                  required
                />
                )}
                {error && error[field?.name] && (
                <Form.Label className="errorStyle">{error[field?.name]}</Form.Label>
              )}  
              </Form.Group>
            );
          case "select":
            return(
              <Form.Group className="mb-3">
                <Form.Label>{field?.title}</Form.Label>
                  <select value={user && user[field?.name]} className="form-control" name={field?.name} onChange={changeHandler} onBlur={blurHandler}>
                    {field?.options.map(item => 
                      <option value={item?.value}>{item?.label}</option>)}
                  </select>
                  {error && error[field?.name] && (
                <Form.Label className="errorStyle">{error[field?.name]}</Form.Label>
              )}
              </Form.Group>   
            )
          default:
            return (
              <span style={{ color: "red", fontSize: "13px" }}>
                Invalid field
              </span>
            );
        }
      })}
    </Form>
  );
};

export default GenericForm;
