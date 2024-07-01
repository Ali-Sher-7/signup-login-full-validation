import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/main.css";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const [valid, setValid] = useState(true);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let isvalid = true;
    let validationError = {};

    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationError.email = "Enter Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationError.email = "Email is not valid";
    }

    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationError.password = "Enter Password";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationError.password = "Password length must be 6";
    }

    if (formData.cpassword !== formData.password) {
      isvalid = false;
      validationError.cpassword = "Confirm Password is not matched";
    }

    axios
      .get("http://localhost:8000/users")
      .then((result) => {
        result.data.map((user) => {
          if (user.email === formData.email) {
            if (user.password === formData.password) {
              if (user.cpassword === formData.cpassword) {
                navigate("/");
              }
            } else {
              isvalid = false;
              validationError.password = "wrong Password";
            }
          } else if (formData.email !== "") {
            isvalid = false;
            validationError.email = "wrong Email";
          } else {
            isvalid = false;
            validationError.email = "you have no account";
          }
        });
        setErrors(validationError);
        setValid(isvalid);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="vh-100 login">
        <div className="container w-100 h-100">
          <div className="row align-items-center w-100 h-100">
            <div className="col-md-6 offset-md-3">
              <div className="signup-form">
                <form
                  className="mt-5 p-4 bg-transparent shadow text-light"
                  onSubmit={handleSubmit}
                >
                  <h4 className="mb-5 text-center "> LOGIN</h4>

                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email<span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control text-light bg-transparent"
                        id="email"
                        aria-describedby="emailHelp"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      {valid ? (
                        <></>
                      ) : (
                        <span className="text-danger">{errors.email}</span>
                      )}
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="password" className="form-label">
                        Password<span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control text-light bg-transparent"
                        id="password"
                        aria-describedby="emailHelp"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                      {valid ? (
                        <></>
                      ) : (
                        <span className="text-danger">{errors.password}</span>
                      )}
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="cpassword" className="form-label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control text-light bg-transparent"
                        id="cpassword"
                        aria-describedby="emailHelp"
                        value={formData.cpassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cpassword: e.target.value,
                          })
                        }
                      />
                      {valid ? (
                        <></>
                      ) : (
                        <span className="text-danger">{errors.cpassword}</span>
                      )}
                    </div>
                  </div>

                  <div className=" text-end">
                    <button
                      type="submit"
                      className="btn text-black fs-5 fw-bold"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-center mt-4">
                    If you have No Account{" "}
                    <span>
                      <Link
                        to="/registration"
                        className="text-black fs-5 fw-bold"
                      >
                        SignUp Now
                      </Link>
                    </span>{" "}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
