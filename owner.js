import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Owner from './components/Owner';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter>
      <Owner />
    </BrowserRouter>,
    document.getElementById('application')
  );
});
