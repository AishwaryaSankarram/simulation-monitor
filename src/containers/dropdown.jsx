import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchCars } from '../actions/index'



const styles = {
  customWidth: {
    width: 250,
  },
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: "Please Select Scenario"
    }

    this.handleChange = this.handleChange.bind(this);
    //this.populateDropdown = this.populateDropdown.bind(this);
  }

  // componentWillReceiveProps(props) {
  //   this.setState({items: props.items});
  // }

  handleChange(event, index, value) {
    console.log("EVENT =>", event);
    this.setState({value: value});
    console.log(event.target.innerHTML);
    this.props.fetchSelectedScenario(value);
    this.props.fetchCars(value)
  }

  // populateDropdown() {
  //   this.props.items.map( (item, index) => {
  //     let keyString = "item" + index.toString();
  //     console.log("KEYSTRING ", keyString);
  //     console.log("item.name ->", item.name)
  //     return (
  //       <div key={keyString}>
  //         <MenuItem value={index} primaryText={item.name} />
  //       </div>
  //     );
  //   });
  // }

  render() {
    console.log("MENU ITEMS =>", this.props.items);
    let menuElements = this.props.items.map( (item, index) => {
      let keyString = "item" + index.toString();
      console.log("KEYSTRING ", keyString);
      console.log("item.name ->", item.name)
      return (
          <MenuItem key= {keyString} value={item} primaryText={item.name} />
        );
    });

    //console.log("menuElements =>", menuElements);

    return(
      <div>
        <MuiThemeProvider >
          <SelectField value={this.state.value} onChange={this.handleChange} style={styles.customWidth}>
            {menuElements}
          </SelectField>
        </MuiThemeProvider>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(null, mapDispatchToProps)(Dropdown);
