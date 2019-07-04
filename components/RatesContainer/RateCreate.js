import React, { Component } from 'react';
import CreateForm from './CreateForm';
import Error from '../Error';
import Loading from '../Loading';
import CreateConfirm from './CreateConfirm';
import { URL_RATE_CREATE } from '../../const';
import { fetchJsonURL } from '../../utils';

export default class RateCreate extends Component {
  state = {
    isDone: false,
    isFetching: false,
    error: '',
    rate: '',
  };

  handleCreate = data => {
    this.setState({
      isDone: false,
      isFetching: true,
      error: '',
      rate: '',
    });
    fetchJsonURL(URL_RATE_CREATE, 'POST', data)
      .then(res => res.json())
      .then(res => {
        this.setState({
          rate: data.rate,
          isDone: true,
          isFetching: false,
          error: '',
        });
        console.log(res);
      })
      .catch(error => {
        this.setState({ error: res.error || error });
      });
  };
  render() {
    const { isDone, isFetching, error, rate } = this.state;

    const { parkings, reload } = this.props;

    if (error) return <Error />;

    if (isFetching) return <Loading />;

    if (isDone)
      return (
        <CreateConfirm name={rate.name} price={rate.price} reload={reload} />
      );

    return <CreateForm handleSubmit={this.handleCreate} parkings={parkings} />;
  }
}
