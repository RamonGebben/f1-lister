import React from 'react';
import ReactDOM from 'react-dom';
import Race from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Race
      raceName="Some race"
      results={[
        {
          position: '1',
          Driver: {
            familyName: 'Rosberg',
            url: 'https://some-url.com',
          },
        },
      ]}
      userFavorites={[]}
      toggleFavorite={f => f}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
