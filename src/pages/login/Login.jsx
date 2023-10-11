import { useState, useEffect } from "react";
import "./Login.css";

export const Login = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormValue({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const hanhleSubmit = (ev) => {
    ev.preventDefault();
    setFormErrors(Validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const Validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password < 4) {
      errors.password = "password must be more than 4 characters! ";
    } else if (values.password > 10) {
      errors.password = "password cant not exceed more than 10 characters! ";
    }
    if (values.confirmPassword != values.password) {
      errors.confirmPassword = "password is nor correct";
    }
    return errors;
  };
  return (
    <div>
      
      <form className="form-login" onSubmit={hanhleSubmit}>
        <input
          type="text"
          name="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p className="form-error">{formErrors.email}</p>
        <input
          type="text"
          name="password"
          className="form-control"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p className="form-error">{formErrors.password}</p>
        <input
          type="text"
          name="Confirm password"
          className="form-control"
          placeholder="Confirm password"
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
        <p className="form-error">{formErrors.confirmPassword}</p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
