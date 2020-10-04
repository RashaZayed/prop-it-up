import React from 'react';
import PersonCard from "./MyComponents"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <PersonCard lastName=" Zayed"firstName=' Rasha' age={30} hairColor = "Hair Color: Brown"/>
        
      </div>
      <div className="card">
        <PersonCard lastName=' Smith' firstName=" John" age={88} hairColor="Hair Color: Brown"/>
       
      </div>
      <div className="card">
        <PersonCard lastName=' Fillmore' firstName=' Millard' age={50} hairColor="Hair Color: Black"/>
        
      </div>
      <div className="card">
        <PersonCard lastName=' Smith' firstName=' Maria' age={62} hairColor="Hair Color: Brown"/>
        
      </div>
      </div>
  );
}

export default App;
