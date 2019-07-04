import React from 'react';
import { Link } from 'react-router-dom';

export default ({ name, price, reload }) => {
  return (
    <form className="form" action="">
      <div className="fields success">
        <label className="label" htmlFor="">
          Название
        </label>
        <input className="input" type="text" disabled={true} value={name} />
      </div>
      <div className="field-help">
        <div className="arrow arrow-active">
          <div className="arrow-body success">
            <label className="label" htmlFor="">
              Тариф создан
            </label>
          </div>
          <div className="arrow-arrow" />
        </div>
      </div>
      <div className="fields success">
        <label className="label" htmlFor="">
          Цена
        </label>
        <input className="input" type="number" disabled={true} value={price} />
      </div>

      <div className="field-help" />
      <div className="fields">
        <Link to="/parkings">
          <div className="btn" onClick={reload}>
            Ок
          </div>
        </Link>
      </div>
    </form>
  );
};
