import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { URL_CAR_CHECK, URL_PAY_PARKING } from '../../const';
import CheckCar from '../CheckCar';
import { fetchJsonURL } from '../../utils';

export default class CheckCarContainer extends Component {
  state = {
    isLoading: false,
  };

  static propTypes = {
    url: PropTypes.string,
    method: PropTypes.string,
    enter: PropTypes.bool,
  }

  static defaultProps = {
    url: URL_CAR_CHECK,
    method: 'PATCH',
    enter: true,
  };

  checkCar = carNumber => {
    const { url, method, enter } = this.props;

    this.setState(state => {
      return {
        isLoading: true,
      };
    });
    const request =
      url === URL_PAY_PARKING
        ? {
            car_info: { number: carNumber.toUpperCase() },
          }
        : {
            //entert true - въезд, false - выезд
            enter: enter,
            car_info: { number: carNumber.toUpperCase() },
          };

    fetchJsonURL(url, method, request)
      .then(data => data.json())
      .then(data => {
        this.setState(state => {
          return {
            isLoading: false,
          };
        });
        this.props.checkCar(data, carNumber);
      })
      .catch(error => {
        this.setState(state => {
          return {
            isLoading: false,
          };
        });
        this.props.checkCar({}, '', error);
      });
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) return <h3>Данные загружаются...</h3>;

    return <CheckCar handleSubmit={this.checkCar} />;
  }
}
