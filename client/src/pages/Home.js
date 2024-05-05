// Home page
import React from "react";
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <h2>Welcome to Progenics!</h2>
      <h6>Please navigate below</h6>
      <Link to="/patient">Submit Form</Link>
      <br></br>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
