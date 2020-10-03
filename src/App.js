import React from 'react';
import PersonCard from "./MyComponents"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <PersonCard lastName="Zayed, " firstName='Rasha'/>
        <PersonCard age='Age: 30'/>
        <PersonCard hairColor = "Hair Color: Brown"/>
      </div>
      <div className="card">
        <PersonCard lastName='Smith, ' firstName="John"/>
        <PersonCard age='Age :88'/>
        <PersonCard hairColor="Hair Color: Brown"/>
      </div>
      <div className="card">
        <PersonCard lastName='Fillmore, ' firstName='Millard'/>
        <PersonCard age="Age : 50"/>
        <PersonCard hairColor="Hair Color: Black"/>
      </div>
      <div className="card">
        <PersonCard lastName='Smith, ' firstName='Maria'/>
        <PersonCard age="Age : 62"/>
        <PersonCard hairColor="Hair Color: Brown"/>
      </div>
      </div>
  );
}

export default App;
