import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Avatar name="Rosberg" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
