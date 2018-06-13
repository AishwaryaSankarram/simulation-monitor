
import React, {Component} from 'react';
import CarCard  from '../components/car-card';
import { connect } from 'react-redux';

class CarPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={{height: '125px'}}>
      <ul>

      </ul>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    selectedScenario: state.selectedScenario
  }
}

export default connect(mapStateToProps)(CarPanel)
