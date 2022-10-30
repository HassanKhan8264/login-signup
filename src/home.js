import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./index.css";

const Login = () => {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values:", values);
    },
  });

  return (
    <div className="loginMain">
      <form onSubmit={formik.handleSubmit}>
        <input
          id="email"
          name="email"
          label="Email"
          placeholder="Enter Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          // error={formik.touched.email && Boolean(formik.errors.email)}
          // helperText={formik.touched.email && formik.errors.email}
        />
        {/* <p className="">this is it</p> */}
        {formik.touched.password && Boolean(formik.errors.password) ? (
          <span className="text-[red]">{formik.errors.password}</span>
        ) : null}
        <input
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          // error={formik.touched.password && Boolean(formik.errors.password)}
          // helperText={formik.touched.password && formik.errors.password}
        />
        {formik.touched.email && Boolean(formik.errors.email) ? (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const SignUp = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="signUpMain">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <div className="w-[50%] border-black border-[1px]">
        <SignUp />
      </div>
      <div className="w-[50%] border-black border-[1px]">
        <Login />
      </div>
    </div>
  );
};
export default Home;
