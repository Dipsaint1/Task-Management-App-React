import React, {useState} from 'react';
import RegistrationForm from "./components/RegistrationForm";
import Welcome from "./components/Welcome";
import Task from "./components/Task";
import "./App.css";

function App(){
  const [getStarted, setGetStarted] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [formSubmit, setFormSubmit] = useState(true);
  const [details, setDetails] = useState({name : "", email: ""});

  const handleGetStarted = () =>{
    setGetStarted(!getStarted);
    setWelcome(!welcome);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setWelcome(!welcome);
    setFormSubmit(!formSubmit);
  }

  const handleUpdatedDetails = details => {
    setDetails({
      name: details.name,
      email: details.email
    })
  }

  return(
    <div className="App">
      {formSubmit ? <RegistrationForm handleSubmit={handleSubmit} getUpdatedDetails={handleUpdatedDetails} /> : null}
      {welcome ? <Welcome name={details.name} handleGetStarted={handleGetStarted} /> : null}
      {getStarted ? <Task/> : null}
    </div>
  );
}
 
export default App;
