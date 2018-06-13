
import React, {Component} from 'react';
import CarCard  from '../components/car-card';
import { connect } from 'react-redux';
import '../css/car-panel.css';

class CarPanel extends Component {

  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    let cards = this.props.cars.map( (car, index) => {
      return (<CarCard key={car.name+index.toString()} name={car.carLabel} type={car.type || "RV"} latitude={car.latitude || 0} longitude={car.longitude || 0} timeToDest={car.timeToDest || 0} speed={car.speed || 0}/>)
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

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(CarPanel)
