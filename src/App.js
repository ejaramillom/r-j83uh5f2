import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value:  0
    }
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.handleChange} >
        </textarea>
        <div className="counter">{this.state.value}</div>
      </div>
    );
  }

  handleChange(event){
    this.setState({
      value: event.target.value.length,
    });
  }
}

export default App;
