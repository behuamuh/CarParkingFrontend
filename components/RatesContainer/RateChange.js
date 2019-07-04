import React, { Component } from 'react';
import CreateForm from './CreateForm';
import Error from '../Error';
import Loading from '../Loading';
import { handleChange } from '../../utils';

export default class RateChange extends Component {
  state = {
    isDone: false,
    isFetching: false,
    error: '',
  };

  handleEdit = data => {
    const { rate, reload } = this.props;
    handleChange('rate', {
      id: rate.id,
      name: data.rate.name,
    });
    reload();
  };
  render() {
    const { rate } = this.props;
    const { isFetching, error } = this.state;
    if (error) return <Error />;

    if (isFetching) return <Loading />;

    return <CreateForm handleSubmit={this.handleEdit} name={rate.name} />;
  }
}
