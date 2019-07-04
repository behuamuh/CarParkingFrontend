import React, { Fragment } from 'react';
import ShowMenu from '../ShowMenu';

export default ({ operator, parkings, handleAction }) => {
  const parking = parkings.find(park => park.id == operator.parking_id);
  return (
    <Fragment>
      <ShowMenu handleAction={handleAction} />
      <form className="form" action="">
        <div className="fields">
          <label className="label" htmlFor="">
            ФИО
          </label>
          <p className="input">{operator.name}</p>
        </div>
        <div className="field-help" />
        <div className="fields">
          <label className="label" htmlFor="">
            Логин
          </label>
          <p className="input">{operator.login}</p>
        </div>
        <div className="field-help" />
        <div className="fields">
          <label className="label" htmlFor="">
            Парковка
          </label>
          <p className="input">{parking.name}</p>
        </div>
        <div className="field-help" />
      </form>
    </Fragment>
  );
};

/*id: 9005
login: "rrr"
name: "rrr"
parking_id: 21*/
