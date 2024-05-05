// This page contains the patient form
import React from "react";
import { useEffect, useState } from "react";

function AllPatients() {
  const [listOfForms, setListOfForms] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    // fetch always succeeds (besides network error), so need additional error checking
    fetch("http://localhost:3001/forms", {
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("FETCH failed");
        }
      })
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setListOfForms(data);
        }
      })
      .catch((error) => console.log("ERROR", error));
  }, []);

  function handleChange(event) {
    setName(event.target.value);
  }

  function checkName(patient) {
    return patient.last_name.toLowerCase().includes(name.toLowerCase());
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/forms/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accessToken: sessionStorage.getItem("accessToken"),
      },
    })
    .then(res => {
      if (res.ok) {
        alert("Successfully delete patient. Refresh the page")
        return res.json
      } else {
        console.error("Failed to delete patient " + id)
      }
    })
    .catch(error => {
      console.error("Error: ", error)
    })
    ;
  }

  return (
    <div>
      <h2>List of all patients</h2>
      <input
        name="patient"
        onChange={handleChange}
        placeholder="Search by Last Name"
      />
      {listOfForms.filter(checkName).map((patient, key) => (
        <div className="patientName" key={patient.id}>
          <h4>
            {patient.first_name} {patient.last_name}{" "}
            <button
              className="deleteBtn"
              onClick={() => handleDelete(patient.id)}
            >
              X
            </button>
          </h4>
        </div>
      ))}
    </div>
  );
}

export default AllPatients;
