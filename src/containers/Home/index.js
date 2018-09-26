import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actionCreators from './actions';

import Header from '../../components/Header';
import PageWrapper from '../../components/PageWrapper';
import InnerPageWrapper from '../../components/InnerPageWrapper';
import Loader from '../../components/Loader';

const SeasonsWrapper = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Season = styled.li`
  text-align: center;
  font-size: 36px;
  display: flex;
  background-color: #0074D9;
  margin: 0 0.5em 0.5em 0;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    margin: 0 0 0.5em 0;
  }

  a {
    flex: 1;
    padding: 1em;
    color: #fff;
    text-decoration: none;
  }
`;

export class Home extends Component {
  componentDidMount() {
    const { actions: { fetchSeasons } } = this.props;
    fetchSeasons();
  }

  render() {
    const { state } = this.props;
    const { seasons, pending } = state;

    return (
      <PageWrapper>
        <Header>
          <h1>
            F1 Lister
          </h1>
        </Header>
        <InnerPageWrapper>
          <h2>Select your season</h2>
          {pending && <Loader />}
          <SeasonsWrapper>
            {seasons.map(({ season: year }) => (
              <Season key={year}>
                <Link to={`/seasons/${year}`}>
                  {year}
                </Link>
              </Season>
            ))}
          </SeasonsWrapper>
        </InnerPageWrapper>
      </PageWrapper>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.shape({
    fetchSeasons: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    seasons: PropTypes.arrayOf(
      PropTypes.shape({
        season: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = ({ home: state }) => ({ state });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
