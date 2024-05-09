// This page contains the patient form
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Patient() {
  const initialValues = {
    first_name: "",
    last_name: "",
    dob: "",
    address: "",
    deliv_hospital: "",
    deliv_date: "",
    deliv_time: "",
    collect_phys: "",
    babys_sex: "",
    birth_weight: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().min(2).max(50).required(), // Want input to be a string, required, min 2 chars, max 50 chars
    last_name: Yup.string().min(2).max(50).required(),
    dob: Yup.string().min(10).max(10).required(),
    address: Yup.string().min(2).max(50).required(),
    deliv_hospital: Yup.string().min(2).max(50).required(),
    deliv_date: Yup.string().min(10).max(10).required(),
    deliv_time: Yup.string().min(8).max(8).required(),
    collect_phys: Yup.string().min(2).max(50).required(),
    babys_sex: Yup.string().min(1).max(1).required(),
    birth_weight: Yup.number().required(),
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
        dob: data.dob,
        address: data.address,
        deliv_hospital: data.deliv_hospital,
        deliv_date: data.deliv_date,
        deliv_time: data.deliv_time,
        collect_phys: data.collect_phys,
        babys_sex: data.babys_sex,
        birth_weight: data.birth_weight,
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
          <br></br>
          <label>Date of Birth: </label>
          <ErrorMessage name="dob" component="span" />
          <Field
            id="inputForm"
            name="dob" 
            placeholder="YYYY-MM-DD"
          />
          <label>Address: </label>
          <ErrorMessage name="address" component="span" />
          <Field
            id="inputForm"
            name="address" 
            placeholder="Address Here"
          />
          <br></br>
          <label>Delivery Hospital: </label>
          <ErrorMessage name="deliv_hospital" component="span" />
          <Field
            id="inputForm"
            name="deliv_hospital" 
            placeholder="Address of Delivery Hospital Here"
          />
          <label>Delivery Date: </label>
          <ErrorMessage name="deliv_date" component="span" />
          <Field
            id="inputForm"
            name="deliv_date" 
            placeholder="YYYY-MM-DD"
          />
          <br></br>
          <label>Delivery Time: </label>
          <ErrorMessage name="deliv_time" component="span" />
          <Field
            id="inputForm"
            name="deliv_time" 
            placeholder="hh:mm:ss"
          />
          <label>Collecting Physician: </label>
          <ErrorMessage name="collect_phys" component="span" />
          <Field
            id="inputForm"
            name="collect_phys" 
            placeholder="Name of Collecting Physician Here"
          />
          <br></br>
          <label>Baby's Sex: </label>
          <ErrorMessage name="babys_sex" component="span" />
          <Field
            id="inputForm"
            name="babys_sex" 
            placeholder="M/F"
          />
          <label>Birth Weight: </label>
          <ErrorMessage name="birth_weight" component="span" />
          <Field
            id="inputForm"
            name="birth_weight" 
            placeholder="lb"
          />
          <br></br>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Patient;
