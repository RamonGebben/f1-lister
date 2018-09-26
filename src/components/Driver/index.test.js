import React from 'react';
import ReactDOM from 'react-dom';
import Driver from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Driver
      position="1"
      url="https://some-url.com"
      familyName="Rosberg"
      userFavorites={[]}
      toggleFavorite={f => f}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
