import React, { Component } from 'react';
import CreateForm from './CreateForm';
import Error from '../Error';
import Loading from '../Loading';
import CreateConfirm from './CreateConfirm';
import { fetchJsonURL } from '../../utils';
import { URL_PARKING_CREATE } from '../../const';

export default class ParkingCreate extends Component {
  state = {
    isDone: false,
    isFetching: false,
    error: '',
    parking: '',
  };

  handleCreate = data => {
    this.setState({
      isDone: false,
      isFetching: true,
      error: '',
      parking: '',
    });
    fetchJsonURL(URL_PARKING_CREATE, 'POST', data)
      .then(res => res.json())
      .then(res => {
        this.setState({
          parking: res.parking,
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
    const { isDone, isFetching, error, parking } = this.state;
    if (error) return <Error />;

    if (isFetching) return <Loading />;

    if (isDone)
      return (
        <CreateConfirm
          name={parking.name}
          places={parking.number_of_places}
          reload={this.props.reload}
        />
      );

    return <CreateForm handleSubmit={this.handleCreate} />;
  }
}
