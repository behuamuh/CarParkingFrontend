import React, { Component } from 'react';
import CreateForm from './CreateForm';
import Error from '../Error';
import Loading from '../Loading';
import { handleChange } from '../../utils';

export default class OperatorChange extends Component {
  state = {
    isDone: false,
    isFetching: false,
    error: '',
  };

  handleEdit = data => {
    const { id } = this.props.operator;
    const operator = {
      id,
      name: data.operator.name,
      login: data.operator.login,
    };

    data.operator.password && (operator.password = data.operator.password);

    handleChange('operator', { operator });
  };
  render() {
    const { operator } = this.props;
    const { isFetching, error } = this.state;
    if (error) return <Error />;

    if (isFetching) return <Loading />;

    return (
      <CreateForm
        handleSubmit={this.handleEdit}
        name={operator.name}
        login={operator.login}
      />
    );
  }
}
