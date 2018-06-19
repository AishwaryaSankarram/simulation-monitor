
import React, {Component} from 'react';
import CarCard  from '../components/car-card';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { updateEV } from '../actions/car-actions'
import '../css/car-panel.css';

class CarPanel extends Component {

  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.updateEV = this.updateEV.bind(this);
  }

  updateEV(car) {
    this.props.updateEV(car);
  }

  renderCards() {
    let cards = this.props.cars.map( (car, index) =>
    {
      return (<CarCard key={car.name+index.toString()} car={car} name={car.carLabel} color={car.color || "#000000"} type={car.type || "RV"} latitude={car.latitude || 0} longitude={car.longitude || 0} timeToDest={car.timeToDest || 0} speed={car.speed || 0} updateEV={this.updateEV}/>)
    });

    return cards;
  }




  render() {
    return(
      <div className="carPanel">
      <ul>
        {this.props.cars && this.renderCards()}
      </ul>
      </div>
    )

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateEV }, dispatch);
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarPanel)
