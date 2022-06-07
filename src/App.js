import React, {useState} from 'react';
import RegistrationForm from "./components/RegistrationForm";
import Welcome from "./components/Welcome";


function App(){
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Register = details => {
    console.log(details);
  }

  const Logout = () => {
    // 
  }

  return(
    <div className="App">
      {(user.email !== "") ? (
        <Welcome/>
      ) : (
        <RegistrationForm Register={Register} error={error}/>
      )}
    </div>
  );
  
}
 
export default App;
