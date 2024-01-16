import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'; //used to create links to different routes and implement navigation around the application. It works like an HTML anchor tag.

export default function Navbar(props) {
  const changeColorRed = () => {
      document.body.style.backgroundColor = '#E53A2F';
      document.getElementById("bn1").style.background='red';
      document.getElementById("bn2").style.background='red';
      document.getElementById("bn3").style.background='red';
      document.getElementById("bn4").style.background='red';
      document.getElementById("bn5").style.background='red';
    
  }
  const changeColorGreen = () => {
    document.body.style.backgroundColor = '#5B9F61';
    document.getElementById("bn1").style.background='green'
    document.getElementById("bn2").style.background='green'
    document.getElementById("bn3").style.background='green'
    document.getElementById("bn4").style.background='green'
    document.getElementById("bn5").style.background='green'
  
}
const changeColorYellow = () => {
  document.body.style.backgroundColor = '#FCFC9B';
  document.getElementById("bn1").style.background='yellow'
  document.getElementById("bn2").style.background='yellow'
  document.getElementById("bn3").style.background='yellow'
  document.getElementById("bn4").style.background='yellow'
  document.getElementById("bn5").style.background='yellow'


}
  return (
    <div>
      {/*Adding bootstrap navbar code here*/}
      {/*to give variable value in tag we enclose className in {``} and the variable will be declared as ${} */}
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
                {/*Link tag is used for routing and to is used instead of href*/}

          <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutUs}</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
  <label className="btn btn-danger" onClick={changeColorRed} htmlFor="btnradio1">Radio 1</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
  <label className="btn btn-success" onClick={changeColorGreen} htmlFor="btnradio2">Radio 2</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
  <label className="btn btn-warning" onClick={changeColorYellow} htmlFor="btnradio3">Radio 3</label>
</div>

{/*we created a toggle switch to change the mode of navbar using condition if mode is light it will set it to dark or otherwise */}
      <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}>
      {/*when we click on the toggle switch it will trigger the prop toggle mode in which a func is running */}
  <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>

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