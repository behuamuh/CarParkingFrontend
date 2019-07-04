import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CreateConfirm = ({ name, place, reload }) => {
  return (
    <form className="form" action="">
      <div className="fields success">
        <label className="label" htmlFor="">
          ФИО
        </label>
        <input className="input" type="text" disabled={true} value={name} />
      </div>
      <div className="field-help">
        <a className="arrow arrow-active">
          <div className="arrow-body success">
            <label className="label" htmlFor="">
              Оператор создан
            </label>
          </div>
          <div className="arrow-arrow" />
        </a>
      </div>
      <div className="fields success">
        <label className="label" htmlFor="">
          Парковка
        </label>
        <input className="input" type="text" disabled={true} value={place} />
      </div>
      <div className="field-help" />
      <div className="fields">
        <Link to="/">
          <div className="btn" onClick={reload}>
            Ок
          </div>
        </Link>
      </div>
    </form>
  );
};

CreateConfirm.propTypes = {
  name: PropTypes.string.isRequired,
  parking: PropTypes.string,
};

export default CreateConfirm;
