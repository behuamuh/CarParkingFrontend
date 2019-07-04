import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import CheckCarContainer from '../CheckCarContainer';

export default class OutCarContainer extends Component {
  state = {
    isCarChecked: false,
    error: '',
  };

  reload = () => {
    this.setState({
      isCarChecked: false,
      error: '',
    });
  };

  componentDidUpdate() {
    this.checkError();
  }

  checkError = () => {
    if (this.state.error) {
      window.alert(this.state.error);
      this.reload();
    } else {
      window.alert('Выезд разрешен!');
    }
  };
  checkCar = (data = {}, carNumber = '', error = '') => {
    const { success, message } = data;
    if (!success) error = message;

    this.setState({
      isCarChecked: true,
      error: error,
    });
  };

  render() {
    const { isCarChecked } = this.state;

    if (!isCarChecked) {
      return <CheckCarContainer checkCar={this.checkCar} enter={false} />;
    }

    return <Redirect to="/operatorpark" />;
  }
}
