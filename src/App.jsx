import React, { Component } from 'react';
import './App.css';
import Header from './layouts/header.js';
import DisplayContainer from './containers/display-container.js'
import openSocket from 'socket.io-client';

import { SOCKET_URL } from './config.js'


window.socket = openSocket(SOCKET_URL, { transports: ['websocket']});



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
