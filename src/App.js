import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Subreddits } from './features/subreddits/Subreddits';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hier kommt die Suche hin</h2>
        <Counter /> 
      </header>
      <main className="App-mainsection">
        <p>Hier kommen die Cards mit den Posts und den Kommentaren</p>
        
      </main>
      <aside className="App-aside">
        <p>Daneben die Filter aka Subreddits</p>
        <Subreddits />
      </aside>

    </div>
  );
}

export default App;
