import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'; //used to create links to different routes and implement navigation around the application. It works like an HTML anchor tag.

 export default function Navbar(props) {

  return (
    <div>
      {/*Adding bootstrap navbar code here*/}
      {/*to give variable value in tag we enclose className in {``} and the variable will be declared as ${} */}
    <nav className= "navbar navbar-expand-lg  navbar-dark" style={{backgroundColor:'#585858 '}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
                {/*Link tag is used for routing and to is used instead of href*/}

          <Link className="nav-link" aria-current="page" to="/">Home</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutUs}</Link>
  </li>
      </ul>

      <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'1px solid black'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'1px solid black'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'1px solid black'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'1px solid black'}}></div>
        <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'1px solid black'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'1px solid black'}}></div>
      </div>
      
      {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
  </form>*/}
{/*we created a toggle switch to change the mode of navbar using condition if mode is light it will set it to dark or otherwise 
      <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}>
      {/*when we click on the toggle switch it will trigger the prop toggle mode in which a func is running 
  <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>

      </div>*/}
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Add title here',
    aboutUs: 'Add about here'
}