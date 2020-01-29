import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from './components/TeamForm';
import Team from './components/Team';

function App() {
  const [teammates, setTeammates] = useState([
    {
      id: 1,
      name: 'Anthony Johnson',
      email: 'anthonyj@email.com',
      role: 'Human'
     }
 ]);

  const addNewTeammate = teammate => {
      const newTeammate = {
        id: teammate.id,
        name: teammate.name,
        email: teammate.email,
        role: teammate.role
      };
    setTeammates([...teammates, newTeammate])
  }

 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <TeamForm addNewTeammate = {addNewTeammate} />
         <Team teammates = {teammates} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
