import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PayForm extends Component {
  static propTypes = {
    car: PropTypes.string,
    driver: PropTypes.string,
    rate: PropTypes.string,
    debet: PropTypes.string,
    handlePay: PropTypes.func,
  };

  state = {
    paid: 0,
    isCashe: true,
    iscontinue: true,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { paid, isCashe, iscontinue } = this.state;
    this.props.handlePay(paid, isCashe, iscontinue);
  };

  render() {
    const { car, driver, rate, debet, equity } = this.props;
    const { paid, isCashe, iscontinue } = this.state;
    return (
     <div className="wrapper">
        <form className="form">
          <div className="fields">
            <label className="label">Номер машины</label>
            <input
              disabled={true}
              type="text"
              name="car"
              className="input"
              value={car}
            />
          </div>
          <div className="field-help" />

          <div className="fields">
            <label className="label">ФИО водителя</label>
            <input
              disabled={true}
              type="text"
              name="driver"
              className="input"
              value={driver}
            />
          </div>
          <div className="field-help" />

          <div className="fields">
            <label className="label">Тариф</label>
            <input
              disabled={true}
              type="text"
              className="input"
              name="rate"
              value={rate}
            />
          </div>
          <div className="field-help" />

          <div className="fields">
            <label className="label">Долг</label>
            <input
              disabled={true}
              type="text"
              className="input"
              name="debet"
              value={debet}
            />
          </div>
          <div className="field-help" />

          <div className="fields">
            <label className="label">{equity < 0 ? 'Долг' : 'Переплата'}</label>
            <input
              disabled={true}
              type="text"
              className="input"
              name="debet"
              value={Math.abs(equity)}
            />
          </div>
          <div className="field-help" />

          <div className="fields">
            <label className="label">ОПЛАЧЕНО</label>
            <input
              type="number"
              className="input"
              name="paid"
              value={paid}
              onChange={this.handleChange}
            />
          </div>
          <div className="field-help" />

          <div className="fields">
            <label className="label">Тип оплаты</label>
            <select
              className="input"
              id="inlineFormCustomSelect"
              name="isCashe"
              value={isCashe}
              onChange={this.handleChange}
            >
              <option value={true}>Наличные</option>
              <option value={false}>Безнал</option>
            </select>
          </div>
          <div className="field-help" />
          <div className="fields">
            <label className="label">Продлить бронь?</label>
            <div className="fields fields-line">
              <input type="radio" onChange={this.handleChange} name="iscontinue" value="true" checked="true" id="cont1"/>
              <label className="btn btn-success check-yes" for="cont1">Да</label>
              <input type="radio" onChange={this.handleChange} value="false" name="iscontinue" id="cont2"/>
              <label className="btn btn-danger" for="cont2">Нет</label>
            </div>
          </div>
          <div className="field-help" />
          <div className="fields">
            <a className="btn" onClick={this.handleSubmit}>
              Записать
            </a>
          </div>
        </form>
     </div> 
    );
  }
}
