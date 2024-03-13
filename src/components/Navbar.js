import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'; //used to create links to different routes and implement navigation around the application. It works like an HTML anchor tag.

 export default function Navbar(props) {

  return (
    <div>
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
