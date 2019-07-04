import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || '',
      parkings: (props.parkings && props.parkings[0].id) || '',
      interval: '1',
      from: '',
      to: '',
      price: '',
    };
  }

  static propTypes = {
    parkings: PropTypes.array,
    handleSubmit: PropTypes.func.isRequired,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { name, parkings, interval, from, to, price } = this.state;

    const data = {
      rate: {
        parking_ids: [parkings],
        name,
        price,
        rate_interval_id: interval,
        date_from: from,
        date_to: to,
      },
    };
    console.log(data);
    this.props.handleSubmit(data);
  };

  render() {
    const { name, parkings, interval, from, to, price } = this.state;
    const options = this.props.parkings
      ? this.props.parkings.map(park => {
          return (
            <option key={park.id} value={park.id}>
              {park.name}
            </option>
          );
        })
      : null;

    return (
      <form className="form" action="">
        <div className="fields">
          <label className="label" htmlFor="">
            Название
          </label>
          <input
            autoFocus={true}
            className="input"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
        </div>
        <div className="field-help">
          <div className="arrow arrow-active">
            <div className="arrow-body">
              Название тарифа необходимо для того, что бы оператор быстро
              ориентировался в нескольких тарифах
            </div>
            <div className="arrow-arrow" />
          </div>
        </div>
        {this.props.name ? null : (
          <Fragment>
            <div className="fields">
              <label className="label" htmlFor="">
                Парковки
              </label>
              <select
                className="input"
                name="parkings"
                onChange={this.handleChange}
                value={parkings}
              >
                {options}
              </select>
            </div>
            <div className="field-help">
              <div className="arrow arrow-active">
                <div className="arrow-body">
                  Выберете все парковки, на которых будет действовать данный
                  тариф
                </div>
                <div className="arrow-arrow" />
              </div>
            </div>
            <div className="fields">
              <label className="label" htmlFor="">
                Интервал
              </label>
              <select
                className="input"
                id=""
                name="interval"
                onChange={this.handleChange}
                value={interval}
              >
                <option value="1">Месяц</option>
                <option value="2">День</option>
                <option value="3">Час</option>
              </select>
            </div>
            <div className="field-help" />
            <div className="fields">
              <label className="label" htmlFor="">
                Действует с
              </label>
              <input
                className="input"
                type="date"
                name="from"
                onChange={this.handleChange}
                value={from}
              />
            </div>
            <div className="field-help">
              <div className="arrow arrow-active">
                <div className="arrow-body">
                  С выбранной даты тариф появится для выбора у оператора&nbsp;
                </div>
                <div className="arrow-arrow" />
              </div>
            </div>
            <div className="fields">
              <label className="label" htmlFor="">
                Действует по
              </label>
              <input
                className="input"
                type="date"
                name="to"
                onChange={this.handleChange}
                value={to}
              />
            </div>
            <div className="field-help">
              <div className="arrow arrow-active">
                <div className="arrow-body">
                  Оставьте поле пустым, если не хотите сейчас выбирать дату
                  окончания&nbsp;
                </div>
                <div className="arrow-arrow" />
              </div>
            </div>
            <div className="fields">
              <label className="label" htmlFor="">
                Цена
              </label>
              <input
                className="input"
                type="number"
                name="price"
                onChange={this.handleChange}
                value={price}
              />
            </div>
            <div className="field-help" />
          </Fragment>
        )}
        <div className="fields">
          <a className="btn" onClick={this.handleSubmit}>
            {this.props.name ? 'Изменить' : 'Создать'}
          </a>
        </div>
        <div className="field-help" />
      </form>
    );
  }
}
