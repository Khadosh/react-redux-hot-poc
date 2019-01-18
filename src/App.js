import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import logo from './logo.svg';
import './App.css';
import Children from './components/Children';
import AnotherChildren from './components/AnotherChildrenConnector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.startCountInterval();
  }

  startCountInterval = () => setInterval(() => this.setState(oldState => ({ counter: oldState.counter + 1 })), 1000);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            { `Local State - Seconds without reload: ${ this.state.counter }` }
          </p>
          <Children />
          <AnotherChildren />
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
