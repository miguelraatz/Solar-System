import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/missioncard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="missions-card" data-testid="mission-card">
        <p className="card-name" data-testid="mission-name">{name}</p>
        <p className="card-year" data-testid="mission-year">{year}</p>
        <p className="card-country" data-testid="mission-country">{country}</p>
        <p className="destination" data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
