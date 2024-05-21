import "./App.css";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home.js'
import Patient from './pages/Patient.js'
import Login from './pages/Login.js'
import Registration from './pages/Registration.js'
import AllPatients from './pages/AllPatients.js'

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navBar">        
            <Link to="/"> Home </Link> | 
            <Link to="/patient"> Submit Form </Link> |
            <Link to="/login"> Login </Link> |
            <Link to="/registration"> Register </Link> 
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} /> {/* The "/" means this is route for the main entry point of website */}
          <Route path='/patient' element={<Patient/>} /> 
          <Route path='/login' element={<Login/>} /> 
          <Route path='/registration' element={<Registration/>} /> 
          <Route path='/allpatients' element={<AllPatients/>} /> 
        </Routes>
      </Router>
      
    </div>
  );
}

/*
<Route path='/patient' element={<Patient/>}/> 
<Route path='/login' element={<Login/>}/> 
*/

export default App;
