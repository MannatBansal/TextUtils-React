import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react'
//import the following components from react router dom
import {
  BrowserRouter as Router, //parent component has all other components. it is router implementation uses html history api to keep ui sync with url
  Routes, //upgrade of switch . routes are chosen based on best match and not traversed in order
  Route //conditionally shown component that renders some UI when its path matches the current URL.
} from "react-router-dom";

function App() {

  //we have created a state in app.js because of which we can use it wherever we want in any component
const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
const [alert, setAlert] = useState(null)

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled.", "success")

    //to change title on button click
    document.title = 'TextUtils-Dark Mode Enabled'
  }
  
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled.", "success")
    document.title = 'TextUtils-Light Mode Enabled'

  }
}

return (
<>
<Router>
{/*Two ways to use component
<Navbar></Navbar>*/}
{/*Togle mode is a prop in which we pass value based on a func in which we run a condition and the mode is a prop which will have value as given to state at that time */}
<Navbar title="TextUtils" aboutUs="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">

<Routes>
{/*exact path will exactly matches the path*/}
<Route exact path="/about" element={<About/>}/>
  
  <Route exact path="/" element={<TextForm showAlert ={showAlert} heading="Enter the text to analyze below" mode={mode}/>
}>
  </Route>
  </Routes>
  
</div>
</Router>
</>
);
}

export default App;
