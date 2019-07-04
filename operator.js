import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Operator from './components/Operator';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter>
      <Operator />
    </BrowserRouter>,
    document.getElementById('application')
  );
});
