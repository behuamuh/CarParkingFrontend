import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CreateForm from './CreateForm';
import Error from '../Error';
import Loading from '../Loading';
import CreateConfirm from './CreateConfirm';
import { fetchJsonURL } from '../../utils';
import { URL_OPERATOR_CREATE } from '../../const';

export default class OperatorCreate extends Component {
  state = {
    isDone: false,
    isFetching: false,
    error: '',
    operator: '',
  };

  static propTypes = {
    parkings: PropTypes.array,
  };

  handleCreate = data => {
    this.setState({
      isDone: false,
      isFetching: true,
      error: '',
      operator: '',
    });
    fetchJsonURL(URL_OPERATOR_CREATE, 'POST', data)
      .then(res => res.json())
      .then(res => {
        this.setState({
          operator: res.operator,
          isDone: true,
          isFetching: false,
          error: res.error,
        });
        console.log(res);
      })
      .catch(error => {
        this.setState({ error: true });
      });
  };
  render() {
    const { isDone, isFetching, error, operator } = this.state;

    const { parkings, reload } = this.props;

    if (error) return <Error />;

    if (isFetching) return <Loading />;

    if (isDone) {
      const parking = parkings.find(park => park.id == operator.parking_id);
      console.log(parking);
      return (
        <CreateConfirm
          name={operator.name}
          place={parking.name}
          reload={reload}
        />
      );
    }
    return <CreateForm handleSubmit={this.handleCreate} parkings={parkings} />;
  }
}
