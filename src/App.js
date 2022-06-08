// import React, {useState} from 'react';
// import RegistrationForm from "./components/RegistrationForm";
// import Welcome from "./components/Welcome";
// import Task from "./components/Task";


// function App(){
//   const [user, setUser] = useState({name: "", email: ""});
//   const [getStarted, setGetStarted] = useState(false);


//   const Register = details => {
//     setUser({
//       name: details.name,
//       email: details.email
//     })
//   }

//   const handleGetStarted = () =>{
//     setGetStarted(!getStarted);
    
//   } 

//   return(
//     // <div className="App">
//     //   {(user.email !== "") ? (
//     //     <Welcome name={user.name} handleGetStarted={handleGetStarted}/>
//     //   ) : (
//     //     <RegistrationForm Register={Register} />
//     //   )}
//     //   {getStarted ? <Task/> : null}
//     // </div>

//     <div className="App">
//       {(user.email !== "") ? (
//         <Welcome name={user.name} handleGetStarted={handleGetStarted}/>
//       ) : (
//         <RegistrationForm Register={Register} />
//       )}
//       {getStarted ? <Task/> : null}
//     </div>
//   );
  
// }
 
// export default App;

import React, {useState} from 'react';
import RegistrationForm from "./components/RegistrationForm";
import Welcome from "./components/Welcome";
import Task from "./components/Task";

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

  return(
    <div className="App">
      {formSubmit ? <RegistrationForm handleSubmit={handleSubmit}/> : null}
      {welcome ? <Welcome name={} handleGetStarted={handleGetStarted} /> : null}
      {getStarted ? <Task/> : null}
    </div>
  );
  
}
 
export default App;


// import React, {useState} from 'react';
// import Task from "./components/Task";

// function App(){
//   const [isToggled, setIsToggled] = useState(false);

//   return(
//     <div className="App">
//       <button onClick={() => setIsToggled(!isToggled)}> Toggle</button>
//       {isToggled ? <Task/> : null }
//     </div>
//   )
// }
 
// export default App;