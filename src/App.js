import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Header = <h1>Hi</h1>
  const welcome = 'welcome react world'

  return (
    <div className="App">
      {Header}
      <p>{welcome}</p>
    </div>
  );
}

export default App;
