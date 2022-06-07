import React, { Component } from 'react'

class Form extends Component {
  state = {  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        
      </form>

    );
  }
}
 
export default Form;