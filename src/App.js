import React, { Component } from 'react';
import { Beatle } from './Beatle'
import './App.css';

class App extends Component {
  state = {
    names: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({names: ["Paul", "John", "George", "Ringo"]})
    }, 1000)
  }

  render() {
    return (
      <div className="App" style={{color: 'red'}}>
        {this.state.names.map(name => <Beatle name={name} />)}
      </div>
    );
  }
}

export default App;
