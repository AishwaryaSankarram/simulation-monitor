import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MyMapComponent} from './components/map.jsx';
import axios from 'axios';
import HomePage from './containers/HomePage.jsx';
import Header from './layouts/header.js';
import CarPanel from './containers/car-panel'


class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <CarPanel />
        <HomePage />
      </div>
    );
  }
}

export default App;
