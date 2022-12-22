import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../css/missions.css';
import '../css/title.css';

class Missions extends Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div className="container-missions" data-testid="missions">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </>
    );
  }
}

export default Missions;
