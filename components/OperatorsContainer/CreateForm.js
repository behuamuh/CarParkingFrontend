import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || '',
      login: props.login || '',
      password: '',
      confirm: '',
      parking: (props.parkings && props.parkings[0].id) || '',
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
    const { name, login, password, confirm, parking } = this.state;
    if (password !== confirm) {
      window.alert('Несовпадают пароли!');
      return;
    }
    const data = {
      operator: {
        name,
        parking_id: parking,
        login,
        password,
      },
    };
    this.props.handleSubmit(data);
  };

  render() {
    const { name, login, password, confirm, parking } = this.state;
    const { parkings = [] } = this.props;
    const options = parkings.map(park => {
      return (
        <option key={park.id} value={park.id}>
          {park.name}
        </option>
      );
    });
    return (
      <form className="form" action="">
        <div className="fields">
          <label className="label" htmlFor="">
            ФИО
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
            <div className="arrow-body">ФИО оператора</div>
            <div className="arrow-arrow" />
          </div>
        </div>
        <div className="fields">
          <label className="label" htmlFor="">
            Логин
          </label>
          <input
            className="input"
            type="text"
            name="login"
            onChange={this.handleChange}
            value={login}
          />
        </div>
        <div className="field-help" />

        <div className="fields">
          <label className="label" htmlFor="">
            Пароль
          </label>
          <input
            className="input"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
        </div>
        <div className="field-help">
          <div className="arrow arrow-active">
            <div className="arrow-body">
              Пароль должен содержать только латинские буквы и цифры
            </div>
            <div className="arrow-arrow" />
          </div>
        </div>
        <div className="fields">
          <label className="label" htmlFor="">
            Подтверждение пароля
          </label>
          <input
            className="input"
            type="password"
            name="confirm"
            value={confirm}
            onChange={this.handleChange}
          />
        </div>
        <div className="field-help" />

        {this.props.name ? null : (
          <Fragment>
            <div className="fields">
              <label className="label" htmlFor="">
                Парковка
              </label>
              <select
                className="input"
                name="parking"
                onChange={this.handleChange}
                value={parking}
              >
                {options}
              </select>
            </div>
            <div className="field-help">
              <div className="arrow arrow-active">
                <div className="arrow-body">
                  Выберете парковку на которой оператор будет вести учет&nbsp;
                </div>
                <div className="arrow-arrow" />
              </div>
            </div>
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
