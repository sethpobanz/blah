import React from 'react';

import './App.css';
import teamNames from './CollegeBasketballTeams.json';
interface teamBlah {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Heading() {
  return (
    <header>
      <h1>Welcome to March Madness</h1>
    </header>
  );
}

class Team extends React.Component<teamBlah> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-item">
        <h2>{oneTeam.school}</h2>
        <div className="team-info">
          <h3>Mascot: {oneTeam.name}</h3>
          <h3>
            Location: {oneTeam.city}, {oneTeam.state}
          </h3>
        </div>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamNames.teams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
