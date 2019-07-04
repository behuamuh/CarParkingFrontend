import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchJsonURL } from '../../utils';
import { URL_GET_PLACE, URL_CAR_CREATE,  URL_CREATE_RESERVE  } from '../../const';

export default class GetPlace extends Component {
  static propTypes = {
    car: PropTypes.string,
    driver: PropTypes.string,
    types: PropTypes.array,
  };
  constructor(props) {
    super(props);

    const { car, driver } = this.props;

    this.state = {
          car: car || '',
          driver: driver || '',
          activeType: 0,
          place: '',
        };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getPlace = event => {
    event.preventDefault();
    fetchJsonURL(URL_GET_PLACE, 'POST', {})
      .then(data => data.json())
      .then(data =>
        this.setState({
          place: data.free_place,
        })
      );
  };

  handleSubmit = event => {
    event.preventDefault();
    const url = this.props.isFound ? URL_CREATE_RESERVE : URL_CAR_CREATE;
    const { car, driver, activeType, place } = this.state;
    fetchJsonURL(url, 'POST', {
      car_info: {
        driver_name: driver,
      },
      reservation: {
        rate: this.props.types[+activeType][0],
        parking_place: place,
      },
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        if (data.error) throw new Error(data.message);
        this.props.finishParking(place);
      })
      .catch(error => this.props.finishParking(place, error));
  };

  render() {
    const { car, driver, activeType, place } = this.state;
    const { types = [] } = this.props;
    //console.log(types);
    return (
      <div className="wrapper">
        <div className="form">
          <div className="fields">
            <label className="label">Номер машины</label>
            <input
              id="NumberCar"
              disabled={this.props.car}
              type="text"
              name="car"
              className="input"
              placeholder="Номер машины"
              value={car}
              onChange={this.handleChange}
            />
          </div>
          <div className="field-help" />
          <div className="fields">
            <label className="label">ФИО водителя</label>
            <input
              id="NumberCar"
              disabled={this.props.driver}
              type="text"
              name="driver"
              className="input"
              placeholder="ФИО водителя"
              value={driver}
              onChange={this.handleChange}
            />
          </div>
          <div className="field-help" />
          <div className="fields">
            <label className="label" htmlFor="inlineFormCustomSelect">
              Тариф
            </label>
            <select
              className="custom-select input"
              id="inlineFormCustomSelect"
              name="activeType"
              value={activeType}
              onChange={this.handleChange}
            >
              {types.map((type, index) => {
                return (
                  <option key={index} value={index}>
                    {`Период - ${type[3]}, цена - ${type[2]}`}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="field-help" />
          <div className="fields">
            <a
              className={place ? 'input' : 'btn btn-warn'}
              onClick={place ? null : this.getPlace}
            >
              {place ? `Место ${place}` : 'Получить место'}
            </a>
          </div>
          <div className="field-help" />
          <div className="fields">
            <a id="SearchCar" className="btn" onClick={this.handleSubmit}>
              Припарковать
            </a>
          </div>
        </div>
      </div>
    );
  }
}
