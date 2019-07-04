import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CheckCarContainer from '../CheckCarContainer';
import { URL_PAY_PARKING } from '../../const';
import PayForm from '../PayForm';
import { fetchJsonURL } from '../../utils';
import { URL_PAY_RESERVED } from '../../const';

export default class PayParkingContainer extends Component {
  state = {
    car: '',
    driver: '',
    isFound: false,
    debt: '',
    equity: '',
    rate: [],
    reserved: false,
    isDone: false,
  };

  checkCar = (data, carNumber, error) => {
    if (error) {
      window.alert(error);
      this.setState({
        car: '',
        driver: '',
        isFound: false,
        debt: '',
        rate: [],
        reserved: false,
        isDone: false,
      });
      return;
    }
    //console.log(data);
    const { balans, found, car_info, reserv_info, reserved } = data;
    this.setState({
      car: car_info.number,
      driver: car_info.driver,
      isFound: found,
      debt: balans.debt,
      equity: balans.equity,
      rate: reserv_info.rate,
      reserved: reserved,
      isDone: false,
    });
  };

  payCar = (paid, isCashe, iscontinue) => {
    fetchJsonURL(URL_PAY_RESERVED, 'PATCH', {
      payment_data: {
        continue: iscontinue,
        pay_type_id: isCashe ? 1 : 2,
        cash: paid,
      },
    })
      .then(data => data.json())
      .then(data => {
        //console.log(data);
        window.alert('Оплата принята');
        this.props.history.push('/');
      })
      .catch(error => window.alert(error));
  };

  render() {
    const { car, isFound, driver, rate, debt, isDone, equity } = this.state;
    const body = !isFound ? (
      <CheckCarContainer
        url={URL_PAY_PARKING}
        method="POST"
        enter={false}
        checkCar={this.checkCar}
      />
    ) : isDone ? (
      <Redirect to="/" />
    ) : (
      <PayForm
        car={car}
        driver={driver}
        rate={rate[1]}
        debet={debt}
        equity={equity}
        handlePay={this.payCar}
      />
    );
    return body;
  }
}
