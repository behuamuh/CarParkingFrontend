import React, { Component } from 'react';
import CreateForm from './CreateForm';
import Error from '../Error';
import Loading from '../Loading';
import { handleChange } from '../../utils';

export default class ParkingChange extends Component {
  state = {
    isDone: false,
    isFetching: false,
    error: '',
  };

  handleEdit = data => {
    const { id } = this.props.parking;
    const { parking } = data;
    parking.id = id;
    handleChange('parking', parking);
  };
  render() {
    const { parking } = this.props;
    const { isFetching, error } = this.state;
    if (error) return <Error />;

    if (isFetching) return <Loading />;

    return (
      <CreateForm
        handleSubmit={this.handleEdit}
        name={parking.name}
        places={parking.number_of_places}
      />
    );
  }
}
