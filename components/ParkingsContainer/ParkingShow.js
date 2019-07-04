import React, { Component, Fragment } from 'react';
import ParkingInfo from './ParkingInfo';
import ParkingMap from './ParkingMap';
import ShowMenu from '../ShowMenu';
import Error from '../Error';
import Loading from '../Loading';
import { fetchJsonURL } from '../../utils';
import { URL_PARKING_SHOW } from '../../const';

export default class ParkingShow extends Component {
  state = {
    isFetching: true,
    error: '',
    parking: null,
  };

  componentDidMount() {
    const data = {
      parking: {
        id: this.props.parking.id,
      },
    };
    fetchJsonURL(URL_PARKING_SHOW, 'PATCH', data)
      .then(res => res.json())
      .then(res => {
        this.setState({
          isFetching: false,
          error: '',
          parking: res,
        });
      })
      .catch(error => {
        this.setState({
          error,
        });
      });
  }
  render() {
    const { isDone, isFetching, error, parking } = this.state;
    console.log(parking);
    const free =
      (parking && parking.parking_places.filter(place => !place[2]).length) ||
      0;
    const total = (parking && parking.parking_places.length) || 0;
    if (error) return <Error />;

    if (isFetching) return <Loading />;

    return (
      <Fragment>
        <ShowMenu handleAction={this.props.handleAction} />
        <div className="content">
          <ParkingInfo
            free={free}
            total={total}
            operator={parking.last_operator}
            amount={parking.amount}
          />
          <ParkingMap places={parking.parking_places} />
        </div>
      </Fragment>
    );
  }
}
// amount: 0
// error: false
// last_operator: {name: "rrr", signed_time: null}
// parking_places: Array(50)
// 0: (3) [104, 1, false]
// 1: (3) [105, 2, false]
// 2: (3) [106, 3, false]
