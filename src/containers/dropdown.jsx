import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchCars } from '../actions/car-actions'



const styles = {
  customWidth: {
    width: 250
  }
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    console.log("EVENT =>", event);
    this.setState({value: value});
    this.props.fetchCars(value);
  }


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


    return(
      <div className="pull-right">
        <MuiThemeProvider >
          <SelectField
          value={this.state.value} onChange={this.handleChange} style={styles.customWidth}>
              {this.state.value === 1 && <MenuItem value={1} primaryText={"Select A Scenario"} disabled={true}/>}
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
