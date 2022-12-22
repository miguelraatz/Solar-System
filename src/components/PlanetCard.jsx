import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/planetcard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet" data-testid="planet-card">
        <img className="img-planet" src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p className="name-planet" data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
