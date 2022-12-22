import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../css/solarsystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title className="planets-title" headline="Planetas" />
        <div className="planets-container" data-testid="solar-system">
          {planets.map((planet) => (
            <PlanetCard
            // className="planets"
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
