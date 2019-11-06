import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props){
    super (props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      count:  0
    }
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3"
          ref={ref => (this.textarea = ref)}
          onInput={this.handleChange}
        >
        </textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }

  handleChange(){
    this.setState({
      count: this.textarea.value.length,
    });
  }
}

export default App;
