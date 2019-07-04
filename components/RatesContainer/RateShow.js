import React, { Fragment } from 'react';
import ShowMenu from '../ShowMenu';

export default ({ rate, parkings, handleAction }) => {
  const options = parkings
    .filter(park => rate.parking_ids.includes(park.id))
    .map(park => {
      return (
        <option key={park.id} value={park.id}>
          {park.name}
        </option>
      );
    });
  return (
    <Fragment>
      <ShowMenu handleAction={handleAction} />
      <form className="form" action="">
        <div className="fields">
          <label className="label" htmlFor="">
            Название
          </label>
          <p className="input">{rate.name}</p>
        </div>
        <div className="field-help" />
        <div className="fields">
          <label className="label" htmlFor="">
            Парковки
          </label>
          <select multiple className="input" name="" id="">
            {options}
          </select>
        </div>
        <div className="field-help" />
        <div className="fields">
          <label className="label" htmlFor="">
            Интервал
          </label>
          <p className="input">{rate.rate_interval_name || rate.rate_interval_id}</p>
        </div>
        <div className="field-help" />
        <div className="fields">
          <label className="label" htmlFor="">
            Действует с
          </label>
          <p className="input">{rate.date_from}</p>
        </div>
        <div className="field-help" />
        <div className="fields">
          <label className="label" htmlFor="">
            Действует по
          </label>
          <p className="input">{rate.date_to}</p>
        </div>
        <div className="field-help" />
        <div className="fields">
          <label className="label" htmlFor="">
            Цена
          </label>
          <p className="input">{rate.price}</p>
        </div>
        <div className="field-help" />
      </form>
    </Fragment>
  );
};
// created_at: "2018-12-05T04:02:17.595Z"
// date_from: "2018-12-05T00:00:00.000Z"
// date_to: "2018-12-31T00:00:00.000Z"
// id: 63
// name: "ww"
// parking_ids: [21]
// price: "2000.0"
// rate_interval_id: 1
// updated_at: "2018-12-05T04:02:17.595Z"
