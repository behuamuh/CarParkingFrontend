import React from 'react';
import blueCar from '../../../../assets/images/car_blue';
import delemitter from '../../../../assets/images/place_delimiter';

const ParkingMap = ({ places = [] }) => {
  places.sort((a, b) => a[1] - b[1]);
  const list = places.map(place => {
    return (
      <div key={place[0]} className="parking-place">
        <img className="place-delimiter-left" src={delemitter} alt="" />
        <p className="place-number">{place[1]}</p>
        {place[2] ? <img src={blueCar} alt="" className="car-image" /> : null}
      </div>
    );
  });
  return <div className="parking">{list}</div>;
};

export default ParkingMap;
