import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GetPlace from '../GetPlace';
import CheckCarContainer from '../CheckCarContainer';

export default class ParkCarContainer extends Component {
  state = {
    isCarChecked: false,
    isFound: false,
    isReserved: false,
    carNumber: '',
    driver: '',
    parkingPlace: '',
    credit: 0,
    types: [],
    error: '',
  };

  checkCar = (data, carNumber = '', error = '') => {
    if (data.hasOwnProperty('error') && data['error']) {
      this.setState({
        error: data['message'],
      });
      return;
    }

    const { found = false, reserved = false, /*car_info = {}*/ driver, rates = [] } = data;
    //const { driver_name = '', parking_place = '', credit = 0 } = car_info;
    this.setState({
      isCarChecked: true,
      isFound: found,
      isReserved: reserved,
      carNumber: carNumber,
      driver: driver,
      //parkingPlace: parking_place,
      //credit: credit,
      types: rates,
      error: error,
    });
  };

  finishParking = (parking_place, error = '') => {
    if (error) {
      this.setState({
        error: error,
      });
    } else {
      window.alert('Забронировано место - ' + parking_place);
      this.props.history.push('/');
    }
  };

  render() {
    const {
      isCarChecked,
      isFound,
      isReserved,
      carNumber,
      driver,
      parkingPlace,
      credit,
      types,
      error,
    } = this.state;

    if (error) {
      console.log(error);
      return (
        <div>
          <h3>Ошибка!</h3>
        </div>
      );
    }

    if (!isCarChecked) {
      return <CheckCarContainer checkCar={this.checkCar} enter={true} />;
    }

    if (!isReserved) {
      return (
        <GetPlace
          car={carNumber}
          driver={driver}
          types={types}
          isFound={isFound}
          finishParking={this.finishParking}
        />
      );
    }

    return (
      <div className="wrapper">
        <div className="form">
          <div className="fields">
            <p className="label">Въезд зафиксирован {parkingPlace}</p>
          {credit < 0 ? `Имеется задолженность : ${credit}` : null}
          <Link to="/" className="btn">
            На главную
          </Link>
        </div>
        </div>
      </div>
    );
  }
}
