import React from 'react';
import PropTypes from 'prop-types';

const ShowMenu = props => {
  console.log(props);
  return (
    <nav className="navigation">
      <div className="dummy" />
      <li>
        <a className="arrow back">
          <div
            className="arrow-body"
            data-action=""
            onClick={props.handleAction}
          >
            Назад
          </div>
          <div className="arrow-arrow" />
        </a>
      </li>
      <li>
        <a className="arrow">
          <div
            className="arrow-body"
            data-action="change"
            onClick={props.handleAction}
          >
            Редактировать
          </div>
          <div className="arrow-arrow" />
        </a>
      </li>
    </nav>
  );
};

export default ShowMenu;
