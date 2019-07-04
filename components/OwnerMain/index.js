import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Settings from '../Settings';
import Reports from '../Reports';
import ParkingsContainer from '../ParkingsContainer';
import OperatorsContainer from '../OperatorsContainer';
import RatesContainer from '../RatesContainer';
import { OWNER } from '../../const';

export default class OwnerMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: {},
      parkings: [],
      operators: [],
      rates: [],
    };

    this.getOwnerData();
  }

  getOwnerData = () => {
    fetch(OWNER)
      .then(data => data.json())
      .then(data => {
        const { owner = {}, parkings = [], operators = [], rates = [] } = data;
        this.setState({ owner, parkings, operators, rates });
      })
      .catch(error => console.error(error));
  };

  render() {
    console.log(this.state);
    const { parkings, operators, rates } = this.state;
    return (
      <div className="wrapper">
        <Switch>
          <Route
            path="/parkings"
            render={() => (
              <ParkingsContainer
                parkings={parkings}
                reload={this.getOwnerData}
              />
            )}
          />
          <Route
            path="/operators"
            render={() => (
              <OperatorsContainer
                operators={operators}
                parkings={parkings}
                reload={this.getOwnerData}
              />
            )}
          />
          <Route
            path="/rates"
            render={() => (
              <RatesContainer
                rates={rates}
                parkings={parkings}
                reload={this.getOwnerData}
              />
            )}
          />
          <Route path="/settings" component={Settings} />
          <Route path="/reports" component={Reports} />
          <Redirect to="/parkings" />
        </Switch>
      </div>
    );
  }
}

const user = {
  owner: {
    id: 9000,
    user_id: 9001,
    first_name: 'Владимир',
    last_name: 'Путин',
    second_name: 'Владимирович',
    created_at: '2018-11-24T10:45:59.040Z',
    updated_at: '2018-11-24T10:45:59.040Z',
  },
  parkings: [],
};
