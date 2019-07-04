import React, { Fragment } from 'react';
import Navbar from '../Navbar';
import OwnerMain from '../OwnerMain';

import { ownerLinks } from '../../const';

export default props => {
  return (
    <Fragment>
      <Navbar links={ownerLinks} />
      <OwnerMain />
    </Fragment>
  );
};
