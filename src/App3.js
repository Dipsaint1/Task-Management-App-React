import React, {useState} from 'react';
import RegistrationForm from "./components/RegistrationForm";
import Welcome from "./components/Welcome";
import Task from "./components/Task";


function App(){
  const [user, setUser] = useState({name: "", email: ""});
  const [isToggled, setIsToggled] = useState(false);

  const Register = details => {
    setUser({
      name: details.name,
      email: details.email
    })
  }

  const handleStartButton = () => {
    if(user.email!==""){
      console.log(user.email);
      (<Task/>);
    }
    // setUser({email: ""})
  }


  return(
    <div className="App">
      {(user.email !== "") ? (
        <Welcome name={user.name} onStart={handleStartButton}/>
      ) : (
        <RegistrationForm Register={Register} />
      )}
    </div>
  );
  
}
 
export default App;
