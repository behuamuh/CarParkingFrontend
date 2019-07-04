import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OperatorList from './OperatorList';
import OperatorCreate from './OperatorCreate';
import OperatorShow from './OperatorShow';
import OperatorChange from './OperatorChange';
import { handleDelete } from '../../utils';

export default class OperatorsContainer extends Component {
  state = {
    active: '',
    action: '',
  };

  static propTypes = {
    operators: PropTypes.array,
    parkings: PropTypes.array,
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
    const { operators = [], parkings = [], reload } = this.props;
    const { active, action } = this.state;
    const activeOperator = operators.find(oper => oper.id === active);
    if (action === 'create')
      return <OperatorCreate parkings={parkings} reload={reload} />;

    if (active) {
      switch (action) {
        case 'show':
          return (
            <OperatorShow
              handleAction={this.toggleAction}
              operator={activeOperator}
              parkings={parkings}
            />
          );
        case 'change':
          return <OperatorChange operator={activeOperator} />;
        case 'delete':
          handleDelete('operator', active);
          window.location.reload();
      }
    }
    return (
      <OperatorList
        handleAction={this.toggleAction}
        active={active}
        parkings={parkings}
        operators={operators}
        toggleActive={this.toggleActive}
      />
    );
  };

  render() {
    return this.getBody();
  }
}
