import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import images from './images';

const Image = styled.img`
  width: 100%;
  height: 300px;
  background-color: #7FDBFF;
`;

const Avatar = ({ name }) => (
  <Image
    src={images[name] || `${process.env.PUBLIC_URL}/driver-fallback.svg`}
  />
);

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Avatar;

export const StyledAvatar = styled(Avatar)``;
