// This page contains the patient form
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Patient() {
  const initialValues = {
    first_name: "",
    last_name: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().min(2).max(50).required(), // Want input to be a string, required, min 2 chars, max 50 chars
    last_name: Yup.string().min(2).max(50).required(),
  });

  const onSubmit = (data) => {
    fetch("http://localhost:3001/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Form successfully submitted")
          return res.json();
        } else {
          console.log("FETCH failed: Form could not be submitted");
        }     
      })
      .catch((error) => console.log("ERROR", error));
  };

  return (
    <div className="FormPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>First Name: </label>
          <ErrorMessage name="first_name" component="span" /> {/* component that error is generated in */}
          <Field
            id="inputForm"
            name="first_name" // Name must match db name // validationSchema={" "}
            placeholder="First Name Here"
          />
          <label>Last Name: </label>
          <ErrorMessage name="last_name" component="span" />
          <Field
            id="inputForm"
            name="last_name" // Name must match db name // initialValues={" "} onSubmit={" "} validationSchema={" "}
            placeholder="Last Name Here"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Patient;
