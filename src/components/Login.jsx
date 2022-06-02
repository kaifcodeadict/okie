import React, { useState } from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import Icon from "./Icon";


function Login() {
  const [activeBtn, setactiveBtn] = useState("emailBtn");
  const buttonStyle = {
    borderRadius: "50px",
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 1%), 0px 2px 2px 0px rgb(0 0 0 / 0%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    textTransform:"capitalize",
    marginTop:"1rem",
    height: "50px",
    padding: "1rem 2rem",
    backgroundColor: "#ffffff",
    color:"#21262b",
    fontWeight:500,
    fontSize:"20px",
    width: "100%",
  };
  const button = {
    width: "100%",
    textTransform: "capitalize",
    height: "44px",
    color: "#8d8d8d",
    borderRadius: "30px",
    fontSize: "18px",
    backgroundColor: "#ffffff",
    boxShadow: "none",
  };
  const handleSwitch = (active) => {
    setactiveBtn(active);
  };

  return (
    <div className="Login">
      <div className="loginHeading">
        <h1 className="loginTitle">Login</h1>
        <span className="loginSubtitle">Hello, Welcome to your account</span>
      </div>
      <div className="loginSwitchbtn">
        <Button
          style={
            activeBtn === "numberBtn"
              ? { ...button, backgroundColor: "#e8480b", color: "#fff" }
              : button
          }
          id={"numberBtn"}
          onClick={(e) => handleSwitch(e.target.id)}
          className="switchBtn"
          fullWidth
          variant="contained"
          size="large"
        >
          Phone Number
        </Button>
        <Button
          style={
            activeBtn === "emailBtn"
              ? { ...button, backgroundColor: "#e8480b", color: "#fff" }
              : button
          }
          id={"emailBtn"}
          fullWidth
          onClick={(e) => handleSwitch(e.target.id)}
          className="switchBtn"
          variant="contained"
          size="large"
        >
          Email
        </Button>
      </div>
      <div className="loginForm">
        <Formik
          initialValues={{ name: "", email: "", password: "", phoneNumber: "" }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "Required*";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required*";
            } else if (!/^[0-9]{4,16}$/i.test(values.password)) {
              errors.password =
                "Password should be in num and mini 4 and max 16  ";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Submit");
          }}
        >
          {({ isSubmitting, resetForm }) => (
            <Form>
              <div className="form">
                <div className="formInput">
                  <label>Email </label>
                  <Field
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="formInput">
                  <label>Password</label>

                  <Field
                    type="password"
                    autoComplete="on"
                    placeholder="Password"
                    name="password"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="signBtn">
        <Button
          style={{ ...button, backgroundColor: "#afb2e8", color: "#ffff" }}
          id={"signIn"}
          className="switchBtn"
          fullWidth
          variant="contained"
          size="large"
        >
          Sign In
        </Button>
      </div>
      <h2 className="switchOption">
        <span>or Sign in with Google</span>
      </h2>
      <div className="googleBtn">
        <Button
          style={buttonStyle}
          id={"customBtn"}
          fullWidth
          startIcon={<Icon />}
          variant="contained"
        >
            Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
