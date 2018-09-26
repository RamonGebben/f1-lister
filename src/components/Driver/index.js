import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledFavorite } from '../Favorite';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledFavorite} {
    cursor: pointer;
  }

  a {
    color: #111;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Driver({
  position,
  url,
  familyName,
  userFavorites,
  toggleFavorite,
}) {
  return (
    <Wrapper key={position}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        #
        {position}&nbsp;
        {familyName}
      </a>
      <StyledFavorite
        height={16}
        width={16}
        fill="#000"
        active={userFavorites.includes(familyName)}
        onClick={() => toggleFavorite(familyName)}
      />
    </Wrapper>
  );
}

Driver.propTypes = {
  position: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
  userFavorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};
