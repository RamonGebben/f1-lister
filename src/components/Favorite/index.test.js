import React from 'react';
import ReactDOM from 'react-dom';
import Favorite from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Favorite />, div);
  ReactDOM.unmountComponentAtNode(div);
});
