import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MyMapComponent} from './components/map.jsx';
import axios from 'axios';
import HomePage from './containers/HomePage.jsx'


const styles = {
  customWidth: {
    width: 250,
  },
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  handleChange = (event, index, value) => {
    console.log("EVENT =>", event);
    console.log("INDEX =>", index);
    console.log("VALUE =>", value);
  }


  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
