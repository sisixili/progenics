import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(2).max(50).required(), // Want input to be a string, required, min 2 chars, max 50 chars
    password: Yup.string().min(6).max(20).required(),
  });

  const onSubmit = (data) => {
    fetch("http://localhost:3001/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => {
        if(res.ok) {
          return res.json() // Dont need values from res.json, otherwise need another .then( data => {})
        }  
      })
      .catch((error) => console.log("ERROR"));
  };

  return <div>
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="registrationContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" /> {/* component that error is generated in */}
          <Field
            id="inputForm"
            name="username" // Name must match db name // validationSchema={" "}
            placeholder="Username"
          />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            type="password"
            id="inputForm"
            name="password" // Name must match db name // initialValues={" "} onSubmit={" "} validationSchema={" "}
            placeholder="Password"
          />
          <button type="submit">Register</button>
        </Form>
      </Formik>


  </div>;
}

export default Registration;
