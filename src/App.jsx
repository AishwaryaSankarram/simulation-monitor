import React, { Component } from 'react';
import './App.css';
import Header from './layouts/header.js';
import DisplayContainer from './containers/display-container.js'
import openSocket from 'socket.io-client';


window.socket = openSocket("http://192.168.1.4:8089", { transports: ['websocket']});



class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <DisplayContainer />
      </div>
    );
  }
}

export default App;
