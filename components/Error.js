import React from 'react';

export default ({ error }) => {
  return (
    <div style={{ color: 'red' }}>
      <h2>Ошибка!</h2>
      <h4>{error}</h4>
    </div>
  );
};
