import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CreateConfirm = ({ name, places, reload }) => {
  return (
    <form className="form" action="">
      <div className="fields">
        <label className="label" htmlFor="">
          Создать оператора для этой парковки?
        </label>
      </div>
      <div className="field-help">
        <a className="arrow arrow-active">
          <div className="arrow-body">
            <div className="info-form">
              <div className="fields success">
                <label className="label" htmlFor="">
                  Название
                </label>
                <input
                  className="input"
                  type="text"
                  disabled={true}
                  value={name}
                />
              </div>
              <div className="fields success">
                <label className="label" htmlFor="">
                  Парковочных мест
                </label>
                <input
                  className="input"
                  type="text"
                  disabled={true}
                  value={places}
                />
              </div>
              <div className="fields success">
                <label htmlFor="" className="label">
                  Парковка создана
                </label>
              </div>
            </div>
          </div>
          <div className="arrow-arrow" />
        </a>
      </div>
      <div className="fields fields-line">
        <Link to="/operators">
          <div className="btn btn-success" onClick={reload}>Да</div>
        </Link>
        <Link to="/">
          <div className="btn btn-danger" onClick={reload}>
            Нет
          </div>
        </Link>
      </div>
    </form>
  );
};

CreateConfirm.propTypes = {
  name: PropTypes.string,
  places: PropTypes.string,
};

export default CreateConfirm;
