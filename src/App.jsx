import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MyMapComponent} from './components/map.jsx';
import axios from 'axios';
import HomePage from './containers/HomePage.jsx';
import LoginPage from './containers/login-page.js'
import Header from './layouts/header.js';
import DisplayContainer from './containers/display-container.js'
import openSocket from 'socket.io-client';


window.socket = openSocket("http://192.168.1.4:8089", { transports: ['websocket']});



class App extends Component {

  constructor(props) {
    super(props);
  }



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
