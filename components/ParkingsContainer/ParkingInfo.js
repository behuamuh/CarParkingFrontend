import React from 'react';

const ParkingInfo = ({ free, total, amount, operator }) => {
  console.log(free, total, amount, operator);
  const name = (operator && operator.name) || '';
  return (
    <div className="info-form">
      <div className="fields fields-line">
        <div className="fields">
          <div className="fields">
            <p className="label">Свободных мест</p>
            <p className="input">{free}</p>
          </div>
          <div className="fields">
            <p className="label">Занятых мест</p>
            <p className="input">{total - free}</p>
          </div>
        </div>
        <div className="fields">
          <div className="fields">
            <p className="label">Сумма в кассе</p>
            <p className="input">{amount}</p>
          </div>
          <div className="fields">
            <p className="label">Сейчас работает</p>
            <p className="input">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingInfo;
