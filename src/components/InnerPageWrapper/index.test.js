import React from 'react';
import ReactDOM from 'react-dom';
import InnerPAgeWrapper from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InnerPAgeWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
