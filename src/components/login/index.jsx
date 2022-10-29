import { useFormik } from "formik";
import * as yup from "yup";
import "./index.css"

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
      <form  onSubmit={formik.handleSubmit}>
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
         {
      (formik.touched.password && Boolean(formik.errors.password))?
      <span className="text-[red]">{formik.errors.password}</span>
      :
      null
    }
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

export default Login;
