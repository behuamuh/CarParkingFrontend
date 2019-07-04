import React from 'react';
import PropTypes from 'prop-types';

import ActionsMenu from '../ActionsMenu';

const ParkingList = ({
  parkings = [],
  active = '',
  handleAction,
  toggleActive,
}) => {
  const list = parkings.map(parking => {
    const { id, number_of_places, name } = parking;
    return (
      <div
        className={id === active ? 'row row-active' : 'row'}
        onClick={toggleActive(id)}
        key={id}
      >
        <div className="cell">{name}</div>
        <div className="cell">{number_of_places}</div>
      </div>
    );
  });
  return (
    <div className="content">
      <ActionsMenu handleAction={handleAction} />
      <div className="table">
        <div className="table-setting col-2">
          <div className="row columns-titles">
            <div className="cell col-title">Название</div>
            <div className="cell col-title">Количество мест</div>
          </div>

          {list}
        </div>
      </div>
    </div>
  );
};

ParkingList.propTypes = {
  parkings: PropTypes.array,
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleAction: PropTypes.func,
  toggleActive: PropTypes.func,
};

export default ParkingList;
