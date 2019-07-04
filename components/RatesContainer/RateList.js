import React from 'react';
import ActionsMenu from '../ActionsMenu';

export default ({
  rates = [],
  active = '',
  handleAction,
  toggleActive,
  allParkings,
}) => {
  const list = rates.map(rate => {
    const parking = allParkings
      .filter(park => rate.parking_ids.includes(park.id))
      .map(park => park.name);
    return (
      <div
        onClick={toggleActive(rate.id)}
        key={rate.id}
        className={rate.id === active ? 'row row-active' : 'row'}
      >
        <div className="cell">{rate.name}</div>
        <div className="cell">{rate.price}</div>
        <div className="cell">{parking}</div>
        <div className="cell">{rate.rate_interval_name || rate.rate_interval_id}</div>
      </div>
    );
  });
  return (
    <div className="content">
      <ActionsMenu handleAction={handleAction} />
      <div className="table">
        <div className="table-setting col-4">
          <div className="row columns-titles">
            <div className="cell col-title">Название</div>
            <div className="cell col-title">Цена</div>
            <div className="cell col-title">Парковки</div>
            <div className="cell col-title">Интервал</div>
          </div>
          {list}
        </div>
      </div>
    </div>
  );
};
// rates: Array(1)
// 0:
// created_at: "2018-12-05T04:02:17.595Z"
// date_from: "2018-12-05T00:00:00.000Z"
// date_to: "2018-12-31T00:00:00.000Z"
// id: 63
// name: "ww"
// parking_ids: [21]
// price: "2000.0"
// rate_interval_id: 1
// updated_at: "2018-12-05T04:02:17.595Z"
// __proto__: Object
