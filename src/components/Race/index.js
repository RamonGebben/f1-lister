import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledFavorite } from '../Favorite';
import Driver from '../Driver';
import Avatar from '../Avatar';

const Wrapper = styled.li`
`;

const InnerWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Winner = styled.div`
  display: inline-block;
  max-width: 300px; width: 100%;
  max-height: 300px;
  position: relative;
  margin: 0 1em 0 0;

  @media screen and (max-width: 500px) {
    max-width: 100%;
    margin: 0 0 1em 0;
  }

  ${StyledFavorite} {
    position: absolute;
    cursor: pointer;
    top: 1em; left: 1em;
  }
`;

const Position = styled.span`
  position: absolute;
  top: -0.6em; right: 16px; /* 16px === 1em inside of caption */
  font-size: 50px;
  font-weight: 900;
  color: #FFDC00;
  user-select: none;

  &:before {
    content: "#";
  }
`;

const Caption = styled.div`
  position: absolute;
  right: 0; bottom: 0; left: 0;
  background-color: #335866;
  font-size: 24px;
  padding: 0.5em;
`;

const WinnerName = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  color: #fff;
`;

const SplitResultWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const ResultsWrapper = styled.ul`
  list-style: none; padding: 0;
  flex: 1;

  &:first-child {
    margin-right: 1em;
  }
`;

export default function Race({
  raceName,
  results,
  userFavorites,
  toggleFavorite,
}) {
  const splitResults = [
    results.slice(0, results.length / 2),
    results.slice(results.length / 2),
  ];

  return (
    <Wrapper>
      <h2>{raceName}</h2>
      <InnerWrapper>
        <Winner>
          <StyledFavorite
            active={userFavorites.includes(results[0].Driver.familyName)}
            onClick={() => toggleFavorite(results[0].Driver.familyName)}
          />
          <Avatar name={results[0].Driver.familyName} />
          <Caption>
            <Position>
              1
            </Position>
            <WinnerName
              href={results[0].Driver.url}
              target="_blank"
              rel="noopener"
            >
              {results[0].Driver.familyName}
            </WinnerName>
          </Caption>
        </Winner>
        <SplitResultWrapper>
          {splitResults.map((list, i) => (
            <ResultsWrapper key={`${new Date().getTime() * i}-driver-list`}>
              {list.map(({ position, Driver: { url, familyName } }) => (
                <Driver
                  key={position}
                  position={position}
                  url={url}
                  familyName={familyName}
                  toggleFavorite={toggleFavorite}
                  userFavorites={userFavorites}
                />
              ))}
            </ResultsWrapper>
          ))}
        </SplitResultWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

Race.propTypes = {
  raceName: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      Driver: PropTypes.shape({
        familyName: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  userFavorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};
