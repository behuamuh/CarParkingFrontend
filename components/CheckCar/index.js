import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class CheckCar extends Component {
  state = {
    input: '',
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  handleChange = event => {
    const value = event.target.value;
    if (value.match(/^[A-Za-z0-9]+$/) || !value.length) {
      this.setState({
        input: value.toUpperCase(),
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const carNumber = this.state.input;

    this.props.handleSubmit(carNumber);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form">
          <div className="fields">
            <label className="label" htmlFor="NumberCarInput">Номер автомобиля</label>
            <input
              id="NumberCar"
              className="input"
              placeholder="A777AA77"
              autoFocus={true}
              type="text"
              style={{ fontSize: 26 }}
              value={this.state.input}
              onChange={this.handleChange}
            />
          </div>

        <div className="field-help"></div>
        <div className="fields">
          <a onClick={this.handleSubmit} id="SearchCar" className="btn">
            Найти
          </a>
        </div>
      </div>
      </div>
    );
  }
}
