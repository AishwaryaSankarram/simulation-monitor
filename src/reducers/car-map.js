import { FETCH_CARS } from '../actions/constants';

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_CARS:
            let carMap = {};
            let carResponse = action.payload.cars;
            carResponse.forEach((car) => {
                carMap[car.vehId] = {label: car.carLabel, poly: car.poly, color: car.color};
            });
            return carMap;
        default:
            return state;
    }
}