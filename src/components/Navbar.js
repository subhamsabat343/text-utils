import React from 'react';
import {Link} from "react-router-dom"
// import PropTypes from 'prop-types'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid ">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item btn btn-outline-success mx-3">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item btn btn-outline-success mx-3">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
    </ul>

    {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px', border:'2px solid black',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px', border:'2px solid black',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px', border:'2px solid black',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px', border:'2px solid black',cursor:'pointer'}}></div>
        <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:'30px', border:'2px solid black',cursor:'pointer'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:'30px', border:'2px solid white',cursor:'pointer'}}></div>
    </div> */}
   
      <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
        <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode(null)}}/>
        <label htmlFor="flexSwitchCheckDefault" className="form-check-label">Toggle Mode</label>
      </div>
    </div>
  </div>
</nav>



   
  )
}

export default Navbar


// Navbar.propTypes={title:PropTypes.string,
//     aboutText:PropTypes.string,
    
//         }

// Navbar.defaultProps={
//     title:"Hello Subham",
//     aboutText:"jioho"
// }

