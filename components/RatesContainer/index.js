import React, { Component } from 'react';
import RateList from './RateList';
import RateCreate from './RateCreate';
import RateShow from './RateShow';
import RateChange from './RateChange';
import { handleDelete } from '../../utils';

export default class RatesContainer extends Component {
  state = {
    active: '',
    action: '',
  };

  toggleAction = event => {
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
    const { rates = [], parkings = [], reload } = this.props;
    const { active, action } = this.state;
    const activeRate = rates.find(park => park.id === active);

    if (action === 'create')
      return <RateCreate parkings={parkings} reload={reload} />;
    if (active) {
      switch (action) {
        case 'show':
          return (
            <RateShow
              handleAction={this.toggleAction}
              rate={activeRate}
              parkings={parkings}
            />
          );
        case 'change':
          return <RateChange rate={activeRate} reload={reload} />;
        case 'delete':
          handleDelete('rate', active);
          window.location.reload();
      }
    }
    return (
      <RateList
        handleAction={this.toggleAction}
        active={active}
        rates={rates}
        allParkings={parkings}
        toggleActive={this.toggleActive}
      />
    );
  };

  render() {
    return this.getBody();
  }
}
