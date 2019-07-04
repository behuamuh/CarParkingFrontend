import React from 'react';
import PropTypes from 'prop-types';

import ActionsMenu from '../ActionsMenu';

const OperatorList = ({
  operators = [],
  parkings = [],
  active = '',
  handleAction,
  toggleActive,
}) => {
  const list = operators.map(oper => {
    const { id, parking_id, name } = oper;
    const parking = parkings.find(park => park.id === parking_id);
    return (
      <div
        className={id === active ? 'row row-active' : 'row'}
        onClick={toggleActive(id)}
        key={id}
      >
        <div className="cell">{name}</div>
        <div className="cell">{parking.name}</div>
      </div>
    );
  });
  return (
    <div className="content">
      <ActionsMenu handleAction={handleAction} />
      <div className="table">
        <div className="table-setting col-2">
          <div className="row columns-titles">
            <div className="cell col-title">ФИО</div>
            <div className="cell col-title">Парковка</div>
          </div>
          {list}
        </div>
      </div>
    </div>
  );
};

OperatorList.propTypes = {
  operators: PropTypes.array,
  parkings: PropTypes.array,
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleAction: PropTypes.func,
  toggleActive: PropTypes.func,
};

export default OperatorList;
