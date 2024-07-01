import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/main.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
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
    if (formData.fname === "" || formData.fname === null) {
      isvalid = false;
      validationError.fname = "Enter First Name";
    }
    if (formData.lname === "" || formData.lname === null) {
      isvalid = false;
      validationError.lname = "Enter Last Name";
    }
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
    setValid(isvalid);
    setErrors(validationError);
    if (Object.keys(validationError).length === 0) {
      alert("SignUp successfully");
      navigate("/");
      axios
        .post("http://localhost:8000/users", formData)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
    console.log(formData);
  };

  return (
    <>
      <div className="vh-100 registration">
        <div className="container h-100 w-100 ">
          <div className="row align-items-center w-100 h-100">
            <div className="col-md-6 offset-md-3">
              <div className="signup-form">
                <form
                  className="  p-4 shadow border rounded text-light"
                  onSubmit={handleSubmit}
                >
                  <h4 className="mb-5  text-center"> Create Your Account</h4>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="fname" className="form-label">
                        First Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent text-light"
                        id="fname"
                        aria-describedby="emailHelp"
                        value={formData.fname}
                        onChange={(e) =>
                          setFormData({ ...formData, fname: e.target.value })
                        }
                      />
                      {valid ? (
                        <></>
                      ) : (
                        <span className="text-danger">{errors.fname}</span>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="lname" className="form-label">
                        Last Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent text-light"
                        id="lname"
                        aria-describedby="emailHelp"
                        value={formData.lname}
                        onChange={(e) =>
                          setFormData({ ...formData, lname: e.target.value })
                        }
                      />
                      {valid ? (
                        <></>
                      ) : (
                        <span className="text-danger">{errors.lname}</span>
                      )}
                    </div>

                    <div className="col-md-12 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email<span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control bg-transparent text-light"
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
                        className="form-control bg-transparent text-light"
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
                        className="form-control bg-transparent text-light"
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
                      SignUp Now
                    </button>
                  </div>
                  <p className="text-center mt-4">
                    If you have Account{" "}
                    <span>
                      <Link to="/login" className="text-black fs-5 fw-bold">
                        Login Now
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

export default Registration;
