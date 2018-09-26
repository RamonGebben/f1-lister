import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PageWrapper from '../../components/PageWrapper';
import Header from '../../components/Header';
import Race from '../../components/Race';

import * as actionCreators from './actions';
import Loader from '../../components/Loader';
import InnerPageWrapper from '../../components/InnerPageWrapper';

const RacesWrapper = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const BackButton = styled(Link)`
  text-decoration: none;
  color: #111;
  border: 1px solid #111;
  padding: 0.5em 1em;
  position: absolute;
  top: 1em; left: 1em;
`;

export class Season extends Component {
  componentDidMount() {
    const {
      actions: { fetchRaces },
      match: { params: { season } },
    } = this.props;
    fetchRaces(season);
  }

  render() {
    const {
      state,
      match: {
        params: { season },
      },
      actions: {
        toggleFavorite,
      },
    } = this.props;
    const { races = [], userFavorites, pending } = state;

    return (
      <PageWrapper>
        <BackButton
          to="/"
        >
          ← Back
        </BackButton>
        <Header>
          <h1>
            Season&nbsp;
            {season}
          </h1>
        </Header>
        <InnerPageWrapper>
          {pending && <Loader />}
          {!pending && (
            <RacesWrapper>
              {races.map(({ raceName, Results }) => (
                <Race
                  key={raceName}
                  raceName={raceName}
                  results={Results}
                  toggleFavorite={toggleFavorite}
                  userFavorites={userFavorites}
                />
              ))}
            </RacesWrapper>
          )}
        </InnerPageWrapper>
      </PageWrapper>
    );
  }
}

Season.propTypes = {
  state: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    races: PropTypes.array.isRequired,
    userFavorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      season: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    toggleFavorite: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ season: state }) => ({ state });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Season);
