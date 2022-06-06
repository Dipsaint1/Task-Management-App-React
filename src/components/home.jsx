import React, { Component } from 'react';
import taskImage from "../images/todo-6.png";

class Home extends Component {
    render() { 
    return (
      <section id="home">
        <div>
          <img src={taskImage} alt="" />
        </div>
        <h2>Organize Your Tasks With Tudy </h2>
        <p>Tudy is a simple and effective task management app which helps your organize your
          files and manage your time.</p>
        <button onClick={this.handleBtnClick} className="btn">Get Started</button>
      </section>
    );
  }
}
 
export default Home;