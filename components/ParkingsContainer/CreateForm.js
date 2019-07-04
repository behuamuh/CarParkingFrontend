import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || '',
      places: props.places || '',
    };
  }

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    name: PropTypes.string,
    places: PropTypes.number,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { name, places } = this.state;
    if (+places != +places || +places <= 0) {
      window.alert('Неверное колличество мест');
      return;
    }
    const data = {
      parking: {
        name,
        number_of_places: +places,
      },
    };
    this.props.handleSubmit(data);
  };

  render() {
    const { name, places } = this.state;
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
          <a className="arrow arrow-active">
            <div className="arrow-body">
              {this.props.name
                ? 'Измените название или колличество мест'
                : 'Придумайте название парковки, или используйте её адрес!'}
            </div>
            <div className="arrow-arrow" />
          </a>
        </div>
        <div className="fields">
          <label className="label" htmlFor="">
            Количество парковочных мест
          </label>
          <input
            className="input"
            type="text"
            name="places"
            onChange={this.handleChange}
            value={places}
          />
        </div>
        <div className="field-help" />
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
