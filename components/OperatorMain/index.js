import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ParkCarContainer from '../ParkCarContainer';
import OutCarContainer from '../OutCarContainer';
import PayParkingContainer from '../PayParkingContainer';

export default () => {
  return (
    <Switch>
      <Route path="/operatorpark" component={ParkCarContainer} exact />
      <Route path="/operatorout" component={OutCarContainer} exact />
      <Route path="/operatorpay" component={PayParkingContainer} exact />
      <Redirect to="/operatorpark" />
    </Switch>
  );
};
