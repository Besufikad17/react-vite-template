import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useFormik } from "formik";
import { useUser } from "../store";
import { useNavigate } from "react-router";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .max(16,'Password should be of maximum 16 characters length')
      .required('Password is required'),
});


function Login() {

  const login = useUser(state => state.setUser);
  const setToken = useUser(state => state.setToken);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues : {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      login(values)
      window.localStorage.setItem("user", JSON.stringify(values));
      navigate("/")
    }
  })

  return (
    <div>
      <section className="position-relative py-4 py-xl-5">
        <div className="container">
          
          {/* Heading */}
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>Log in</h2>
            </div>
          </div>

          {/* Body */}
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div className="card mb-5">
                <div className="card-body d-flex flex-column align-items-center">
                
                  {/* Icon */}
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                    <FaUserAlt />
                  </div>

                  {/* Form */}
                  <form className="text-center" method="post"  onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.email && formik.touched.email ? (<div>{formik.errors.email}</div>) : (null) }
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.password && formik.touched.password ? (<div>{formik.errors.password}</div>) : (null) }
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary d-block w-100"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-muted">Forgot your password?</p>
                    <p className="text-muted">
                      <a href="/signup" style={{textDecoration:"none", "color": "black"}}>Don't have account?</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
