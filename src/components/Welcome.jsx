import React from 'react';
import taskImage from "../images/todo-6.png";

  const Welcome = ({name, handleGetStarted}) => {
    return ( 
      <section id="home">
        <h1>Welcome {name}</h1>
        <div>
          <img src={taskImage} alt="" />
        </div>
        <h2>Organize Your Tasks With Tudy </h2>
        <p>Tudy is a simple and effective task management app which helps your organize your
          files and manage your time.</p>
        <button className="btn" onClick={handleGetStarted}>Get Started</button>
      </section>
     );
  }
  

  export default Welcome;