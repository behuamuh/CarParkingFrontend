import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar';
import OperatorMain from '../OperatorMain';
import { operatorLinks } from '../../const';

export default class Operator extends Component {
  render() {
    return (
      <Fragment>
        <Navbar links={operatorLinks} />
        <OperatorMain />
      </Fragment>
    );
  }
}
