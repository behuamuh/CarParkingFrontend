import React from 'react';
import PropTypes from 'prop-types';

const ActionsMenu = ({ handleAction }) => {
  return (
    <div className="actions">
      <a
        onClick={handleAction}
        data-action="create"
        className="btn btn-success"
      >
        Создать
      </a>
      <a onClick={handleAction} data-action="show" className="btn">
        Просмотреть
      </a>
      <a onClick={handleAction} data-action="change" className="btn btn-warn">
        Редактировать
      </a>
      <a onClick={handleAction} data-action="delete" className="btn btn-danger">
        Удалить
      </a>
    </div>
  );
};

ActionsMenu.propTypes = {
  handleAction: PropTypes.func.isRequired
}

export default ActionsMenu;