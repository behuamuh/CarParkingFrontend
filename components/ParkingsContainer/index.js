import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ParkingList from './ParkingList';
import ParkingCreate from './ParkingCreate';
import ParkingShow from './ParkingShow';
import ParkingChange from './ParkingChange';
import { handleDelete } from '../../utils';

export default class ParkingsContainer extends Component {
  state = {
    active: '',
    action: '',
  };

  static propTypes = {
    parkings: PropTypes.array,
  };

  toggleAction = event => {
    console.log(event.target.dataset);
    this.setState({
      action: event.target.dataset.action,
    });
  };

  toggleActive = id => () => {
    const { active } = this.state;
    this.setState({
      active: id === active ? '' : id,
    });
  };

  getBody = () => {
    const { parkings = [], reload } = this.props;
    const { active, action } = this.state;
    const activeParking = parkings.find(park => park.id === active);

    if (action === 'create') return <ParkingCreate reload={reload} />;
    if (active) {
      switch (action) {
        case 'show':
          return (
            <ParkingShow
              parking={activeParking}
              handleAction={this.toggleAction}
            />
          );
        case 'change':
          return <ParkingChange parking={activeParking} />;
        case 'delete':
          handleDelete('parking', active);
          window.location.reload();
      }
    }
    return (
      <ParkingList
        handleAction={this.toggleAction}
        active={active}
        parkings={parkings}
        toggleActive={this.toggleActive}
      />
    );
  };

  render() {
    return this.getBody();
  }
}
