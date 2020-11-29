import React from 'react';
import './App.css';
import Days from './Components/Days';

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>5-day forcast.</h1>
      </div>
      <div className="week-content">
        <Days />
        <Days />
        <Days />
        <Days />
        <Days />
      </div>
    </div>
  );
}

export default App;
